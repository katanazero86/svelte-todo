<script lang="ts">
    import {Route} from 'svelte-router-spa';

    export let currentRoute;
    export let params;
</script>

<main class="default-layout">
    <Route {currentRoute}/>
</main>

<style>
    .default-layout {
        height: 100vh;
        background: linear-gradient(
                160deg, #f8deff, #8e6bcf);
        padding: 0 4px;
    }
</style>