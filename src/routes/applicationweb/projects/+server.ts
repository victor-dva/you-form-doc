import prisma from '$lib/prismaConfig';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    const projects = await prisma.project.findMany();
    return json(projects);
};

export const POST: RequestHandler = async ({ request }) => {
    const { title } = await request.json();
    const newProject = await prisma.project.create({
        data: { title },
    });
    return json(newProject);
};