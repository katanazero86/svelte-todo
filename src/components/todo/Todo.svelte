<script lang="ts">

    import Today from "../today/Today.svelte";
    import Checkbox from "../checkbox/Checkbox.svelte";
    import TodoTab from "../tabs/TodoTab.svelte";
    import TodoAddBtn from "../buttons/TodoAddBtn.svelte";

    let label: string = '보훈님 회의';
</script>


<div class="bg-slate-50 w-[550px] h-[600px] relative rounded-md py-12 shadow-md">
    <div class="pb-4">
        <Today/>
    </div>
    <div class="pb-4">
        <TodoTab/>
    </div>
    <div class="h-80 max-h-full overflow-auto px-5">
        <Checkbox label={label}/>
    </div>
    <div class="todo-btn">
        <TodoAddBtn />
    </div>
</div>

<style>
    .todo-btn {
        position: absolute;
        left: 50%;
        bottom: -70px;
        transform: translate(-50%, -50%);
    }
</style>