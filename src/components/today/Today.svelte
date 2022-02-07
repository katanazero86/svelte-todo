<script lang="ts">
    const DAY: readonly string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const MONTH: readonly string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const today: object = new Date();

    const year: number = today.getFullYear();
    const month: string = MONTH[today.getMonth()];
    const date: number = today.getDate();
    const day: string = DAY[today.getDay()];

</script>

<div class="flex flex-row items-center justify-between text-slate-800">
    <div class="text-base flex flex-row items-center">
        <p class="font-bold text-4xl">
            {date}
        </p>
        <div class="pl-2 text-sm leading-none">
            <p class="font-semibold">
                {month}
            </p>
            <p>
                {year}
            </p>
        </div>
    </div>
    <div class="font-semibold text-sm">
        {day}
    </div>
</div>

<style>

</style>