<script lang="ts">
    export let handleAddTodoClick: () => void;
    const handleClick: () => void = () => {
        if (handleAddTodoClick) handleAddTodoClick();
    }
</script>

<button class="rounded-full bg-orange-300 p-4 shadow-lg touch:can-hover:hover:bg-orange-400" on:click={handleClick}>
    <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 24 24" width="38" fill="#f8fafc">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
</button>

