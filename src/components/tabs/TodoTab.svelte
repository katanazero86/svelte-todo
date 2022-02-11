<script lang="ts">
    import {onMount} from "svelte";

    export let handleTabChange: (tabValue: string) => void | undefined;
    const TAB_ITEMS: readonly string[] = ['ALL', 'DONE'];
    const activeColor:string = '#9a78d6';
    const noActiveColor:string = '#94a3b8';
    const noActiveClass:string = 'bg-gray-100 can-hover:hover:bg-violet-50 border-slate-200';
    let activeTab: string | undefined;

    onMount(() => {
        activeTab = TAB_ITEMS[0];
    });

    const handleTabClick = targetTab => () => {
        activeTab = targetTab;
        if(handleTabChange) handleTabChange(targetTab);
    };

</script>

<div class="flex flex-row items-center justify-between cursor-pointer divide-x divide-slate-200">
    <div class={`basis-1/2 flex justify-center touch:can-hover:hover:bg-violet-50 py-3 border-b border-transparent ${activeTab !== TAB_ITEMS[0] && noActiveClass}`}
         on:click={handleTabClick(TAB_ITEMS[0])}>
        <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 0 20 20"
             width="34" fill={activeTab === TAB_ITEMS[0] ? activeColor : noActiveColor}>
            <rect fill="none" height="20" width="20"/>
            <path d="M18,7.5h-7V6h7V7.5z M18,12.5h-7V14h7V12.5z M3.06,5.11L2,6.17L4.83,9l4.6-4.6L8.36,3.34L4.83,6.88L3.06,5.11z M3.06,11.61 L2,12.67l2.83,2.83l4.6-4.6L8.36,9.84l-3.54,3.54L3.06,11.61z"/>
        </svg>
    </div>
    <div class={`basis-1/2 flex justify-center touch:can-hover:hover:bg-violet-50 py-3 border-b border-transparent ${activeTab !== TAB_ITEMS[1] && noActiveClass}`}
         on:click={handleTabClick(TAB_ITEMS[1])}>
        <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 0 24 24" width="34" fill={activeTab === TAB_ITEMS[1] ? activeColor : noActiveColor}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"/>
        </svg>
    </div>
</div>