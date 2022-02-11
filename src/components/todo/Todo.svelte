<script lang="ts">

    import {onMount} from 'svelte';
    import {scale} from 'svelte/transition';
    import Today from '../today/Today.svelte';
    import TodoTab from '../tabs/TodoTab.svelte';
    import TodoAddBtn from '../buttons/TodoAddBtn.svelte';
    import TodoModal from '../modals/TodoModal.svelte';
    import Item from './item/Item.svelte';
    import Loading from '../loading/Loading.svelte';
    import {
        createTodoCollection,
        deleteTodoByDocId,
        findTodoCollection, findTodoCollectionByDone,
        updateTodoIsDone, updateTodoTodo
    } from '../../firebase/repositories/todo.repository';
    import type {TodoInterface} from '../../firebase/types/todo.types';

    let currentTabValue: string = '';
    let isShow: boolean = false;
    let isDisabled: boolean = false;
    let isFix: boolean = false;
    let targetFixTodo: TodoInterface | undefined;
    let todos: Promise<TodoInterface[] | void> = Promise.resolve([]);

    const ALL = 'ALL';
    const DONE = 'DONE';

    onMount(() => {
        currentTabValue = ALL;
        initTodos();
    });

    const initTodos = () => {
        switch (currentTabValue) {
            case ALL :
                return todos = findTodoCollection().catch(error => {
                    console.error(error);
                    console.error('findTodoCollection error..');
                });
            case DONE:
                return todos = findTodoCollectionByDone().catch(error => {
                    console.error(error);
                    console.error('findTodoCollectionByDone error..');
                });
            default:
                return todos = findTodoCollection().catch(error => {
                    console.error(error);
                    console.error('findTodoCollection error..');
                });
        }
    };

    const handleTabChange: (tabValue: string) => void = (tabValue) => {
        currentTabValue = tabValue;
        initTodos();
    };

    const handleAddTodoClick: () => void = () => {
        isShow = true;
    };

    const handleModalCloseClick: () => void = () => {
        isShow = false;
        isDisabled = false;
        isFix = false;
    };

    const handleModalConfirmClick: (targetEl: HTMLElement, targetTodo: string) => void = async (targetEl, targetTodo) => {
        isDisabled = true;
        if (targetTodo === '') {
            alert('할 일을 입력해주세요.');
            targetEl.focus();
            isDisabled = false;
            return false;
        }
        const targetPayload: TodoInterface = {
            todo: targetTodo,
            isDone: false,
            createdAt: new Date(),
        };
        try {
            const resultDocRefId: string = await createTodoCollection(targetPayload);
        } catch (error) {
            console.error(error);
            console.error('createTodoCollection error..');
            isDisabled = false;
        }

        initTodos().finally(() => {
            isDisabled = false;
        });
        handleModalCloseClick();
    };

    const handleModalFixClick: (targetEl: HTMLElement, targetFixTodo: TodoInterface, newTodo: string) => void = async (targetEl, targetFixTodo, newTodo) => {
        isDisabled = true;
        if (newTodo === '') {
            alert('할 일을 입력해주세요.');
            targetEl.focus();
            isDisabled = false;
            return false;
        }
        const targetPayload: TodoInterface = {
            id: targetFixTodo.id,
            todo: newTodo,
        };
        try {
            await updateTodoTodo(targetPayload);
        } catch (error) {
            console.error(error);
            console.error('updateTodoTodo error..');
            isDisabled = false;
        }

        initTodos().finally(() => {
            isDisabled = false;
        });
        handleModalCloseClick();
    };

    const updateIsDone: (updateTargetTodo: TodoInterface, isDone: boolean) => void = async (updateTargetTodo, isDone) => {
        if (!updateTargetTodo) {
            alert('업데이트를 진행할 TODO 를 찾지못했습니다.');
            return false;
        }
        const targetPayload: TodoInterface = {
            id: updateTargetTodo.id,
            isDone: isDone,
        };
        try {
            await updateTodoIsDone(targetPayload);
            updateTargetTodo.isDone = isDone;
        } catch (error) {
            console.error(error);
            console.error('updateTodoIsDone error..');
        }
    };

    const fixTodo: (fixTargetTodo: TodoInterface) => void = (fixTargetTodo) => {
        targetFixTodo = fixTargetTodo;
        isFix = true;
        isShow = true;
    };

    const deleteTodo: (deleteTargetTodo: TodoInterface) => void = async (deleteTargetTodo) => {
        if (!deleteTargetTodo) {
            alert('삭제할 TODO 를 찾지못했습니다.');
            return false;
        }
        if (confirm('삭제 하시겠습니까?')) {
            try {
                await deleteTodoByDocId(deleteTargetTodo.id);
            } catch (error) {
                console.error(error);
                console.error('deleteTodoByDocId error..');
            }
            initTodos().finally(() => {
                isDisabled = false;
            });
        }
    };

</script>


<div class="bg-slate-50 w-full max-w-[550px] h-[600px] relative rounded-md py-12 shadow-md">
    <div transition:scale class="pb-4">
        <Today/>
    </div>
    <div class="pb-4">
        <TodoTab
                handleTabChange={handleTabChange}
        />
    </div>
    <div class="h-80 max-h-full overflow-auto px-5">
        {#await todos}
            <Loading/>
        {:then targetTodos}
            {#if targetTodos.length !== 0}
                {#each targetTodos as todoObj}
                    <Item targetTodo={todoObj}
                          updateIsDone={updateIsDone}
                          fixTodo={fixTodo}
                          deleteTodo={deleteTodo}
                    />
                {/each}
            {:else}
                <p class="font-semibold text-center">데이터가 없습니다 :) (No data)</p>
            {/if}
        {/await}
    </div>
    <div class="todo-btn">
        <TodoAddBtn handleAddTodoClick={handleAddTodoClick}/>
    </div>
</div>

{#if isShow}
    <TodoModal
            isDisabled={isDisabled}
            isFix={isFix}
            targetFixTodo={targetFixTodo}
            handleModalCloseClick={handleModalCloseClick}
            handleModalConfirmClick={handleModalConfirmClick}
            handleModalFixClick={handleModalFixClick}/>
{/if}

<style>
    .todo-btn {
        position: absolute;
        left: 50%;
        bottom: -70px;
        transform: translate(-50%, -50%);
    }
</style>