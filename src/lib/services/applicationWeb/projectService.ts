import type { Project } from "$lib/models/applicationWeb";
import prisma from "$lib/prismaConfig";

// RequirementGroup methods
export const addProject = async (project: Project) => {
    return await prisma.project.create({
        data: project,
    });
};

export const getProjects = async () => {
    return await prisma.project.findMany();
};

export const updateProject = async (id: number, updatedproject: Omit<Project, 'id'>) => {
    return await prisma.project.update({
        where: { id },
        data: updatedproject,
    });
};

export const deleteProject = async (id: number) => {
    return await prisma.project.delete({
        where: { id },
    });
};

