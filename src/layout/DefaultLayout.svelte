<script lang="ts">
    import {Route} from 'svelte-router-spa';
    import type {CurrentRouteInterface} from "../interfaces/CurrentRouteInterface";

    export let currentRoute: CurrentRouteInterface;
    let params: object = {};
    let queryParams: object = {};
    console.log(currentRoute);
    queryParams = {...currentRoute.queryParams};
</script>

<main class="default-layout">
    <h1>test</h1>
    <Route {currentRoute} {queryParams}/>
</main>

<style>
    .default-layout {
        height: 100%;
        background: linear-gradient(
                160deg
                , #e3ddf0, #8e6bcf);
    }
</style>