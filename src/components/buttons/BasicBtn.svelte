<script lang="ts">

    const COLORS: readonly string[] = ['INDIGO'];

    export let name: string = '';
    export let color: string = ''.trim().toUpperCase();
    export let handleTargetClick: () => void;
    export let disabled: boolean = false;

    const handleClick: () => void = () => {
        if (handleTargetClick) handleTargetClick();
    }

</script>

{#if color.trim().toUpperCase() === COLORS[0]}
    <button on:click={handleClick}
            type="button"
            disabled={disabled}
            class="w-full text-white bg-indigo-500 can-hover:hover:bg-indigo-600 font-medium rounded-lg p-3 text-center disabled:bg-slate-50 disabled:text-slate-500">
        {name}
    </button>
{:else}
    <button on:click={handleClick}
            type="button"
            disabled={disabled}
            class="w-full text-gray-400 bg-white can-hover:hover:bg-gray-100 font-medium rounded-lg p-3 text-center border border-gray-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-transparent">
        {name}
    </button>
{/if}