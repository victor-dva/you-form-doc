import type { RequirementGroup } from "$lib/models/applicationWeb";
import prisma from "$lib/prismaConfig";

// RequirementGroup methods
export const addRequirementGroup = async (requirementGroup: Omit<RequirementGroup, 'id' | 'requirements'>) => {
    return await prisma.requirementGroup.create({
        data: {
            type: requirementGroup.type,
            title: requirementGroup.title,
        }
    });
};

export const getRequirementGroups = async () => {
    return await prisma.requirementGroup.findMany({
        include: {requirements: true},
    });
};

export const updateRequirementGroup = async (id: string, updatedRequirementGroup: Omit<RequirementGroup, 'id'>) => {
    return await prisma.requirementGroup.update({
        where: { id },
        data: {
            type: updatedRequirementGroup.type,
            title: updatedRequirementGroup.title,
        }
    });
};

export const deleteRequirementGroup = async (id: string) => {
    return await prisma.requirementGroup.delete({
        where: { id },
    });
};

