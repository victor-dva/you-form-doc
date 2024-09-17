import { json, type RequestHandler } from "@sveltejs/kit";
import prisma from "$lib/prismaConfig";

export const GET: RequestHandler = async ({ params }) => {
    const project = await prisma.project.findUnique({
        where: { id: Number(params.id) },
    });
    if(project) {
        return json(project);
    } else {
        return json({message: 'Unknown project...'})
    }
    
};

export const PATCH: RequestHandler = async ({ params, request }) => {
    const { title, isFinished } = await request.json();
    const updatedProject = await prisma.project.update({
        where: { id: Number(params.id) },
        data: { title, isFinished },
    });
    return json(updatedProject);
};

export const DELETE: RequestHandler = async ({ params }) => {
    try {
        await prisma.project.delete({
            where: { id: Number(params.id) },
        });
    
        // Réinitialiser la séquence d'auto-incrémentation
        const lastId = await prisma.project.findFirst({
            orderBy: { id: 'desc' },
        });
    
        if (lastId) {
            await prisma.$executeRaw`UPDATE sqlite_sequence SET seq = ${lastId.id} WHERE name = 'Project'`;
        } else {
            // Si aucun enregistrement n'existe, réinitialiser à 0
            await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Project'`;
        }
    
        return json({ message: 'Projected deleted' });
    } catch (error) {
        console.error("Erreur lors de la suppression du projet ou de la réinitialisation de la séquence d'autoincrémentation des id", error);
        return json({error: 'Erreur lors de la suppression du projet'}, { status: 500 });

    }
    
    
};