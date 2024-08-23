import type { Project } from "$lib/models/applicationWeb";
import { type RequestHandler } from "@sveltejs/kit";

let project: Project | null = null;

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json();

    project = {
        id: data.id,
        title: data.title,
        isFinished: data.isFinished
    };

    return new Response(JSON.stringify({success: true}), {status: 200});
};

export const GET: RequestHandler = async () => {
    if(project) {
        return new Response(JSON.stringify(project), {status: 200 });
    } else {
        return new Response(JSON.stringify({error: 'No data found'}), {status: 404})
    }
}