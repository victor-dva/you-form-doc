import type { PageLoad } from "./$types";

export const load: PageLoad = async({ fetch, url }) => {
    const projectId = url.searchParams.get('id');
    const response = await fetch(`/applicationweb/projects/${projectId}`);

    if(!response.ok) {
        return { error: 'Erreur lors de la récupération des données', status: 404 };
    }

    const projectData = await response.json();

    return projectData;
}