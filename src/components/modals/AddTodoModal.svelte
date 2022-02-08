<script lang="ts">
    import CloseBtn from "../buttons/CloseBtn.svelte";
    import BasicBtn from "../buttons/BasicBtn.svelte";

    export let handleModalCloseClick: () => void;
    export let handleModalConfirmClick: (targetEl: HTMLElement, targetTodo: string) => void;

    let todo: string = '';
    let targetInputEl: HTMLElement;

    const handleCloseClick: () => void = () => {
        if (handleModalCloseClick) handleModalCloseClick();
    };

    const handleCancelClick: () => void = () => {
        handleCloseClick();
    };

    const handleConfirmClick: (e) => void = e => {
        if (handleModalConfirmClick) handleModalConfirmClick(targetInputEl, todo.trim());
    };

</script>

<div class="flex justify-center items-center fixed right-0 left-0 top-0 bottom-0 z-50 bg-opacity-25 bg-black h-full"
     on:click|self={handleCloseClick}>
    <div class="relative px-4 w-full max-w-md">
        <div class="relative bg-white rounded-lg shadow-lg">
            <div class="flex justify-end p-2">
                <CloseBtn handleCloseClick={handleCloseClick}/>
            </div>
            <div class="px-6 pb-4 space-y-6">
                <h3 class="text-xl font-medium text-gray-900">Add TODO</h3>
                <div>
                    <input bind:value={todo}
                           bind:this={targetInputEl}
                           autofocus
                           type="text"
                           class="text-sm bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-violet-300"
                           placeholder="Your Todo" required>
                </div>
                <div class="flex gap-x-2">
                    <BasicBtn name="취소" handleTargetClick={handleCancelClick}/>
                    <BasicBtn color="indigo" name="확인" handleTargetClick={handleConfirmClick}/>
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