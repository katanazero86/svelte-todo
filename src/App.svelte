<script lang="ts">
    import {Router} from 'svelte-router-spa';
    import routes from './routes';
    import Tailwind from "./tailwind/Tailwind.svelte";
</script>

<Router {routes}/>
<Tailwind />
