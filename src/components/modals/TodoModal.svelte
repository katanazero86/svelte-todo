<script lang="ts">
    import {onMount} from 'svelte';
    import {fade} from 'svelte/transition';
    import CloseBtn from '../buttons/CloseBtn.svelte';
    import BasicBtn from '../buttons/BasicBtn.svelte';
    import type {TodoInterface} from '../../firebase/types/todo.types';

    export let isDisabled: boolean = false;
    export let isFix: boolean = false;
    export let targetFixTodo: TodoInterface | undefined;
    export let handleModalCloseClick: () => void;
    export let handleModalConfirmClick: (targetEl: HTMLElement, targetTodo: string) => void;
    export let handleModalFixClick: (targetEl: HTMLElement, targetFixTodo: TodoInterface, newTodo: string) => void;

    let modalTitle: string = 'Add TODO';
    let todo: string = '';
    let targetInputEl: HTMLElement;

    onMount(() => {
        if (isFix && targetFixTodo) {
            modalTitle = 'Fix TODO';
            todo = targetFixTodo.todo
        }
    });

    const handleKeyup: (e: KeyboardEvent) => void = e => {
        if (e.key === 'Enter') {
            if (isFix) {
                handleFixClick();
            } else {
                handleConfirmClick();
            }
        }
    };

    const handleCloseClick: () => void = () => {
        if (handleModalCloseClick) handleModalCloseClick();
    };

    const handleCancelClick: () => void = () => {
        handleCloseClick();
    };

    const handleConfirmClick: () => void = () => {
        if (handleModalConfirmClick) handleModalConfirmClick(targetInputEl, todo.trim());
    };

    const handleFixClick: () => void = () => {
        if (handleModalFixClick) handleModalFixClick(targetInputEl, targetFixTodo, todo.trim());
    };

</script>

<div transition:fade={{duration: 200}}
     class="flex justify-center items-center fixed right-0 left-0 top-0 bottom-0 z-50 bg-opacity-25 bg-black h-full">
    <div class="relative px-4 w-full max-w-md">
        <div class="relative bg-white rounded-lg shadow-lg">
            <div class="flex justify-end p-2">
                <CloseBtn handleCloseClick={handleCloseClick} disabled={isDisabled}/>
            </div>
            <div class="px-6 pb-4 space-y-6">
                <h3 class="text-xl font-medium text-gray-900">{modalTitle}</h3>
                <div>
                    <input bind:value={todo}
                           bind:this={targetInputEl}
                           on:keyup={handleKeyup}
                           type="text"
                           class="text-sm bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-violet-300"
                           placeholder="Your Todo"
                           maxlength="45"
                           required>
                </div>
                <div class="flex gap-x-2">
                    <BasicBtn name="취소" handleTargetClick={handleCancelClick} disabled={isDisabled}/>
                    {#if isFix}
                        <BasicBtn color="indigo" name="수정" handleTargetClick={handleFixClick}
                                  disabled={isDisabled}/>
                    {:else}
                        <BasicBtn color="indigo" name="확인" handleTargetClick={handleConfirmClick}
                                  disabled={isDisabled}/>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    input[type="text"]:valid {
        outline: none;
        background-color: #ffffff;
        border-color: #c4b5fd;
    }
</style>