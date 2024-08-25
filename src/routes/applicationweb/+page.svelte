<script lang="ts">
    import type { Project } from "$lib/models/applicationWeb";
	import { addProject, getProjects, updateProject } from "$lib/services/applicationWeb/projectService";
	import { onMount } from "svelte";
	import { goto } from '$app/navigation';
	import { ApplicationLogger } from "$lib/logs/Logger";

    /** Store projects */
    let projects: Project[] = []
    
    /** Fetch projects */
    onMount(async () => {
        ApplicationLogger.INFO('Récupération des projets')
        projects = await getProjects()
    })

    /** Dialog */
    let createDialog: HTMLDialogElement
    let updateDialog: HTMLDialogElement
    /** Method called to open project's creation form*/
    const openDialog = (dialog: HTMLDialogElement, project: Project | null = null) => {
        if (project) {
            currentProject = {id: project.id, title: project.title, isFinished: project.isFinished};
        }
        if (dialog) {
            dialog.showModal()
        }
    }
    /** Method called to open project's creation form*/
    const closeDialog = (dialog: HTMLDialogElement) => {
        dialog.close()
    }

    /** Create project */
    let newProject: Project = {title: '', isFinished: false}
    let createButton: HTMLButtonElement

    const createProject = async () => {
        createButton.disabled = true
        await addProject(newProject);
        ApplicationLogger.INFO(`Création du projet "${newProject.title}"`)
        projects = await getProjects();
        closeDialog(createDialog)
        newProject = { title: '', isFinished: false };
        createButton.disabled = false
    }

    /** Update project */
    let currentProject: Project = { title: '', isFinished: false }
    let updateButton: HTMLButtonElement

    const renameProject = async () => {
        updateButton.disabled = true
        await updateProject(currentProject.id!, currentProject);
        ApplicationLogger.INFO(`Renommage du projet en "${currentProject.title}"`)
        projects = await getProjects();
        closeDialog(updateDialog)
        currentProject = { title: '', isFinished: false };
        updateButton.disabled = false
    }

    /** Method called to navigate into project page + pass data */
    const goToProject = async (project: Project) => {
        const response = await fetch(`/applicationweb/${project.title}/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })

        if (response.ok) {
            goto(`applicationweb/${project.title}`)
        } else {
            console.error('Erreur : données non envoyées')
        }
    }
</script>

<fieldset>
    <legend>Projets</legend>
    <button id="createProject" on:click={() => openDialog(createDialog)}>Créer un projet</button>
    <!-- Display projects -->
    <ul>
        {#each projects as project}
            <!-- svelte-ignore a11y-interactive-supports-focus -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="projectButton" role="button" on:click|preventDefault={() => project && goToProject(project)}>
                <h2>{project.title}</h2>
                <button id="updateProject" on:click|preventDefault={event => {
                    event.stopPropagation();
                    openDialog(updateDialog, project);
                }}>📝</button>
            </div>
        {:else}
            <p>Aucun projet</p>
        {/each}
    </ul>
</fieldset>

<dialog bind:this={createDialog}>
    <h1> Créer un projet </h1>
    <form on:submit|preventDefault={createProject}>
        <input bind:value={newProject.title} placeholder="Nom du projet" required/>
        <button bind:this={createButton} id="createButton" type="submit">Créer</button>
    </form>
    <button id="cancelButton" on:click={() => closeDialog(createDialog)}>Annuler</button>
</dialog>

<dialog bind:this={updateDialog}>
    <h1> Renommer le projet </h1>
    <form on:submit|preventDefault={renameProject}>
        <input bind:value={currentProject.title} placeholder="{currentProject.title}" required/>
        <button bind:this={updateButton} id="updateButton" type="submit">Mettre à jour</button>
    </form>
    <button id="cancelButton" on:click={() => closeDialog(updateDialog)}>Annuler</button>
</dialog>

<style>
    /** fieldset style */
    fieldset {
        margin-left: 1%;
        margin-right: 1%;
        margin-top: 2%;
        margin-bottom: 2%;
    }
    legend {
        background-color: #1a237e;
        color: #fff;
        padding: 3px 6px;
    }

    /** .projectButton style */
    .projectButton {
        float: left;
        margin: 2% 1% 2% 1%;
        padding: 5px 0px 5px 0px;
        width: 200px;
        height: 100px;
        background-color: #1a237e;
        color: white;
        cursor: pointer;
    }
    .projectButton h2 {
        text-align: center;
    }

    /** #createProject style*/
    #createProject {
        float: right;
    }

    /** #updateProject style*/
    #updateProject {
        float: right;
        margin: 0% 5% 0% 0%;
    }

    /** dialog style*/
    dialog {
        text-align: center;
    }
    dialog #createButton {
        background-color: #1a237e;
        color: white;
    }
    dialog #createButton:disabled{
        background-color: gray;
        color: white;
    }
    dialog #cancelButton {
        margin-top: 10%;
        background-color: #1a237e;
        color: white;
    }
</style>
