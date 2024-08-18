<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";
    import type { Project } from "$lib/models/applicationWeb";

    let projects: Project[] = [
        {title: 'Facebook', isFinished: false},
        {title: 'Twitter', isFinished: false},
        {title: 'Instagram', isFinished: false}
    ];
    let newProject: Project = {title: '', isFinished: false}
</script>

<fieldset>
    <legend>Projets</legend>
    <button class="create">Créer un projet</button>
    <ul>
        {#each projects as project}
             <ProjectCard title={project.title}/>
        {/each}
    </ul>
</fieldset>

<style>
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

    .create {
        float: right;
    }
</style>
