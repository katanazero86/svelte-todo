<script lang="ts">
    import {fade} from 'svelte/transition';
    import type {TodoInterface} from '../../firebase/types/todo.types';

    export let targetTodo: TodoInterface;
    export let handleIsDoneChange: (updateTargetTodo, isDone) => void;
    let label: string | undefined = targetTodo.todo;
    let isDone: boolean | undefined = targetTodo.isDone;
    let id: string | undefined = targetTodo.id;

    const handleChange = e => {
        if (handleIsDoneChange) handleIsDoneChange(targetTodo, e.target.checked);
    };

</script>

<label class="checkbox">
    <input type="checkbox" bind:checked={isDone} on:change={handleChange} value={id}/>
    <span class="checkbox__check">
        {#if isDone}
            <svg transition:fade={{duration: 200}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="15"
                 height="15">
        <path stroke="currentColor" fill="currentColor" fill-rule="nonzero" stroke-width="1.5"
              d="M8.489 13.597l7.304-7.304a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.403.011l-4-3.875a1 1 0 1 1 1.392-1.436l3.293 3.19z"></path>
        </svg>
            {/if}
    </span>
    <p class={`checkbox__label ${isDone && 'line-through'}`}>{label}</p>
</label>

<style>

    .checkbox {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .checkbox > input[type="checkbox"] {
        appearance: none;
        height: 0;
    }

    /*.checkbox > input[type="checkbox"]:checked + .checkbox__check > svg {*/
    /*    color: #6366f1;*/
    /*}*/

    .checkbox > .checkbox__check {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #dbdbdb;
        width: 20px;
        height: 20px;
        border-radius: 5px;
    }

    .checkbox__check > svg {
        color: #9a78d6;
    }

    .checkbox > .checkbox__label {
        padding-left: 14px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.2px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }


</style>