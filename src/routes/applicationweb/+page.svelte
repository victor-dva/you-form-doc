<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";
    import type { Project } from "$lib/models/applicationWeb";

    /** Store projects */
    let projects: Project[] = [
        {title: 'Facebook', isFinished: false},
        {title: 'Twitter', isFinished: false},
        {title: 'Instagram', isFinished: false}
    ];
    let newProject: Project = {title: '', isFinished: false}

    /** Create a project */
    let dialog: HTMLDialogElement
    /** Method called to open project's creation form*/
    const openDialog = () => {
        if (dialog) {
            dialog.showModal()
        }
    }
    /** Method called to open project's creation form*/
    const closeDialog = () => {
        dialog.close()
    }
</script>

<fieldset>
    <legend>Projets</legend>
    <button id="createProject" on:click={() => openDialog()}>Créer un projet</button>
    <!-- Displays created projects -->
    <ul>
        {#each projects as project}
             <ProjectCard title={project.title}/>
        {/each}
    </ul>
</fieldset>

<dialog bind:this={dialog}>
    <h1> Créer un projet </h1>
    <form>
        <input placeholder="Nom du projet" required/>
        <button id="createButton" type="submit">Créer</button>
    </form>
    <button id="cancelButton" on:click={() => closeDialog()}>Annuler</button>
</dialog>

<style>
    /** Fieldset style */
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
    /** createProject button style*/
    #createProject {
        float: right;
    }
    /** Project creation form*/
    dialog {
        text-align: center;
    }
    dialog #createButton {
        background-color: #1a237e;
        color: white;
    }
    dialog #cancelButton {
        margin-top: 10%;
        background-color: #1a237e;
        color: white;
    }
</style>
