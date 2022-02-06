<script lang="ts">
    import {Route} from 'svelte-router-spa';
    import type {CurrentRouteInterface} from "../interfaces/CurrentRouteInterface";

    export let currentRoute: CurrentRouteInterface;
    let params: object = {};
    let queryParams: object = {};
    console.log(currentRoute);
    queryParams = {...currentRoute.queryParams};
</script>

<div>
    <h1>test</h1>
    <Route {currentRoute} {queryParams}/>
</div>