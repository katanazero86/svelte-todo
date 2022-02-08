import type {SvelteComponent} from 'svelte';

export interface CurrentRouteInterface {
    name: string;
    component: SvelteComponent
    layout: string
    queryParams: object
    namedParams: object
    childRoute: object
    language: string | undefined
    hash: string
    path: string
}


