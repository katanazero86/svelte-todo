<script lang="ts">

    import Today from "../today/Today.svelte";
    import Checkbox from "../checkbox/Checkbox.svelte";
    import TodoTab from "../tabs/TodoTab.svelte";

    let label: string = '보훈님 회의';
</script>


<div class="bg-slate-50 w-[550px] rounded-md py-12 shadow-md">
    <div class="pb-4">
        <Today/>
    </div>
    <div class="pb-4">
        <TodoTab/>
    </div>
    <div class="h-80 max-h-full overflow-auto px-5">
        <Checkbox label={label}/>
    </div>
</div>