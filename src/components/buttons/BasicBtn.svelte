<script lang="ts">

    const COLORS: readonly string[] = ['INDIGO'];

    export let name: string = '';
    export let color: string = ''.trim().toUpperCase();
    export let handleTargetClick: () => void;

    const handleClick: () => void = () => {
        if (handleTargetClick) handleTargetClick();
    }

</script>

{#if color.trim().toUpperCase() === COLORS[0]}
    <button on:click={handleClick}
            type="button"
            class="w-full text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg p-3 text-center">
        {name}
    </button>
{:else}
    <button on:click={handleClick}
            type="button"
            class="w-full text-gray-400 bg-white hover:bg-gray-100 font-medium rounded-lg p-3 text-center border border-gray-200">
        {name}
    </button>
{/if}