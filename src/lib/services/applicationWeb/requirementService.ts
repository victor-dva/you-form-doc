import type { Requirement } from "$lib/models/applicationWeb";
import prisma from "$lib/prismaConfig";

// Requirement methods
export const addRequirement = async (requirement: Requirement) => {
    return await prisma.requirement.create({
        data: {
            title: requirement.title,
            isFulfilled: requirement.isFulfilled,
            group: {
                connect: {id: requirement.groupId}
            }
        }
    });
};

export const getRequirements = async () => {
    return await prisma.requirement.findMany({
        include: { group: true },
    });
};

export const updateRequirement = async (id: string, updatedRequirement: Omit<Requirement, 'id'>) => {
    return await prisma.requirement.update({
        where: { id },
        data: {
            title: updatedRequirement.title,
            isFulfilled: updatedRequirement.isFulfilled,
            group: {
                connect: { id: updatedRequirement.groupId }
            }
        }
    });
};

export const deleteRequirement = async (id: string) => {
    return await prisma.requirement.delete({
        where: { id },
    });
};

