<script lang="ts">
    export let title: string
</script>

<div>
    <h1>{ title }</h1>
    <button>Supprimer</button>
    <button>Mettre à jour</button>
</div>

<style>
    div {
        float: left;
        margin-left: 2%;
        margin-right: 2%;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 5px;
        background-color: #1a237e;
        color: white;
    }

    h1 {
        text-align: center;
    }
</style>