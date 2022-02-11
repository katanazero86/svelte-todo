<script lang="ts">

    import TodoCheckbox from '../../checkbox/TodoCheckbox.svelte';
    import FixBtn from '../../buttons/FixBtn.svelte';
    import DeleteBtn from '../../buttons/DeleteBtn.svelte';
    import type {TodoInterface} from '../../../firebase/types/todo.types';

    export let targetTodo: object | undefined;
    export let updateIsDone: (updateTargetTodo: TodoInterface, isDone: boolean) => void;
    export let fixTodo: (fixTargetTodo: TodoInterface) => void;
    export let deleteTodo: (deleteTargetTodo: TodoInterface) => void;

    const handleIsDoneChange: (updateTargetTodo: TodoInterface, isDone: boolean) => void = (updateTargetTodo, isDone) => {
        if (updateIsDone) {
            updateIsDone(updateTargetTodo, isDone);
        }
    };

    const handleFixClick = () => {
        if (fixTodo) fixTodo(targetTodo);
    };

    const handleDeleteClick = () => {
        if (deleteTodo) deleteTodo(targetTodo);
    };

</script>

<div class="flex items-center justify-between">
    <div class="flex-1 min-w-0">
        <TodoCheckbox targetTodo={targetTodo}
                      handleIsDoneChange={handleIsDoneChange}/>
    </div>
    <div class="flex-initial">
        <FixBtn handleFixClick={handleFixClick}/>
        <DeleteBtn handleDeleteClick={handleDeleteClick}/>
    </div>
</div>