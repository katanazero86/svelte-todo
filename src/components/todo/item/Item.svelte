<script lang="ts">

    import Checkbox from "../../checkbox/TodoCheckbox.svelte";
    import FixBtn from "../../buttons/FixBtn.svelte";
    import DeleteBtn from "../../buttons/DeleteBtn.svelte";

    export let itemLabel: string | undefined = 'test';

</script>

<div class="flex items-center justify-between">
    <div class="flex-1">
        <Checkbox label={itemLabel}/>
    </div>
    <div class="flex-initial">
        <FixBtn/>
        <DeleteBtn/>
    </div>
</div>