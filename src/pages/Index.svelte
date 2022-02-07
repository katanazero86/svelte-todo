<script lang="ts">
    import Checkbox from "../components/checkbox/Checkbox.svelte";
    import Today from "../components/today/Today.svelte";

    export let name: string;
    let label = 'test';
</script>

<div class="flex flex-row items-center justify-center">
    <div class="bg-slate-50 w-[550px] rounded-md py-12 px-5">
        <Today />
        <Checkbox label={label}/>
        <h1 class="text-3xl font-bold underline font-mono">Hello {name}!</h1>
        <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    </div>
</div>

<style>

</style>