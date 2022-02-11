<script lang="ts">
    import Todo from "../components/todo/Todo.svelte";
    export let currentRoute;
    export let params;
</script>

<div class="flex flex-row items-center justify-center index">
    <Todo/>
</div>

<style>

    .index {
        height: 100%;
    }

</style>