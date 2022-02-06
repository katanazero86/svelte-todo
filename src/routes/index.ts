import Index from '../pages/Index.svelte';

import DefaultLayout from '../layout/DefaultLayout.svelte';

const routes = [
    {
        name : '/',
        component: Index,
        layout: DefaultLayout,
    }
]

export default routes