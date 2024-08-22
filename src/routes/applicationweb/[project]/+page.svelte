<script lang="ts">
	import type { Project } from "$lib/models/applicationWeb";

    export let data: Project | null = null;
</script>

{#if data}
     <h1>{data.title}</h1>
     <p>Terminé : {data.isFinished ? 'Oui' : 'Non'}</p>
{:else}
     <p>Chargement des données...</p>
{/if}