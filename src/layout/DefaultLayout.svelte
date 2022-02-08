<script lang="ts">
    import {Route} from 'svelte-router-spa';
    import type {CurrentRouteInterface} from "../types/CurrentRouteInterface";

    export let currentRoute: CurrentRouteInterface;
    let params: object = {};
    let queryParams: object = {};
    queryParams = {...currentRoute.queryParams};
</script>

<main class="default-layout">
    <Route {currentRoute} {queryParams}/>
</main>

<style>
    .default-layout {
        height: 100vh;
        background: linear-gradient(
                160deg, #f8deff, #8e6bcf);
        padding: 0 4px;
    }
</style>