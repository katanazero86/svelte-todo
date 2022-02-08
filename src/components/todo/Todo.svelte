<script lang="ts">

    import Today from "../today/Today.svelte";
    import TodoTab from "../tabs/TodoTab.svelte";
    import TodoAddBtn from "../buttons/TodoAddBtn.svelte";
    import AddTodoModal from "../modals/AddTodoModal.svelte";
    import Item from "./item/Item.svelte";
    import {createTodoCollection} from '../../firebase/repositories/todo.repository';

    let isShow = false;
    const handleAddTodoClick: () => void = () => {
        isShow = true;
    };
    const handleModalCloseClick: () => void = () => {
        isShow = false;
    };
    const handleModalConfirmClick: (targetEl: HTMLElement, targetTodo: string) => void = async (targetEl, targetTodo) => {
        if (targetTodo === '') {
            alert('할 일을 입력해주세요.');
            targetEl.focus();
            return false;
        }
        const targetPayload = {
            idx: 1,
            todo: targetTodo,
            isDone: false,
        }
        await createTodoCollection(targetPayload);
    };

</script>


<div class="bg-slate-50 w-[550px] h-[600px] relative rounded-md py-12 shadow-md">
    <div class="pb-4">
        <Today/>
    </div>
    <div class="pb-4">
        <TodoTab/>
    </div>
    <div class="h-80 max-h-full overflow-auto px-5">
        <Item/>
        <Item/>
    </div>
    <div class="todo-btn">
        <TodoAddBtn handleAddTodoClick={handleAddTodoClick}/>
    </div>
</div>

<AddTodoModal isShow={isShow}
              handleModalCloseClick={handleModalCloseClick}
              handleModalConfirmClick={handleModalConfirmClick}/>

<style>
    .todo-btn {
        position: absolute;
        left: 50%;
        bottom: -70px;
        transform: translate(-50%, -50%);
    }
</style>