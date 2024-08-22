import type { PageLoad } from "./$types";

export const load: PageLoad = async({ fetch, params }) => {
    const project = params.project;
    const response = await fetch(`/applicationweb/${project}/data`);

    if(!response.ok) {
        return { error: 'Erreur lors de la récupération des données' };
    }

    const projectData = await response.json();

    return projectData;
}