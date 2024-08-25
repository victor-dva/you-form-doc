<script lang="ts">
	import { goto } from "$app/navigation";
	import { ApplicationLogger } from "$lib/logs/Logger";
	import type { Project } from "$lib/models/applicationWeb";
	import { deleteProject } from "$lib/services/applicationWeb/projectService";

     export let data: Project;

     /** Dialog */
     let dialog: HTMLDialogElement
     /** Method called to open project's delete confirm */
     const openDialog = () => {
          if (dialog) {
          dialog.showModal()
          }
     }
    /** Method called to close project's delete confirm */
    const closeDialog = () => {
        dialog.close()
    }

    /** Method called to delete project and redirect to projects page */
    const removeProject = async(id: string) => {
          await deleteProject(id);
          ApplicationLogger.INFO(`Suppression du projet "${data.title}"`)
          goto(`/applicationweb`);
     }

    const goToExigence = (category: string) => {
          goto(`${data.title}/${category}`)
    }
</script>

{#if data}
     <fieldset>
          <legend>{data.title}</legend>
          <button id="deleteProject" on:click|preventDefault={() => openDialog()}>Supprimer projet</button>
          <div class="projectCategory">
               <button on:click|preventDefault={() => goToExigence('exigence') }>Exigence</button>
               <button on:click|preventDefault={() => goToExigence('user-story') }>User story</button>
               <button on:click|preventDefault={() => goToExigence('test') }>Test</button>
          </div>
     </fieldset>
{:else}
     <p>Projet inexistant</p>
{/if}

<dialog bind:this={dialog}>
     <h1> Etes-vous sur de vouloir supprimer le projet "{data.title}"</h1>
     <button id="cancelButton" on:click={() => closeDialog()}>Annuler</button>
     <button id="deleteButton" on:click={() => data.id && removeProject(data.id)}>Confirmer</button>
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

    /** #deleteProject style*/
    #deleteProject {
        float: right;
        background-color: #ab003c;
        color: #fff;
    }

    /** dialog style*/
    dialog {
        text-align: center;
    }
    dialog #deleteButton {
        background-color: #1a237e;
        color: white;
    }
    dialog #deleteButton:disabled{
        background-color: gray;
        color: white;
    }
    dialog #cancelButton {
        margin-top: 10%;
        background-color: #1a237e;
        color: white;
    }

    /** .projectCategory style */
    .projectCategory {
          margin: 5% 0% 0% 0%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10pt;
    }

    .projectCategory button {
     background-color: #1a237e;
     width: 200pt;
     height: 50pt;
     color: white;
    }

    .projectCategory button:hover {
     background-color: #3f51b5;
    }
 </style>