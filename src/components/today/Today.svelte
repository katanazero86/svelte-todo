<script lang="ts">
    const DAY: readonly string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const MONTH: readonly string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const today: Date = new Date();

    const year: number = today.getFullYear();
    const month: string = MONTH[today.getMonth()];
    const date: number = today.getDate();
    const day: string = DAY[today.getDay()];

</script>

<div class="flex items-center justify-between text-slate-800 px-5">
    <div class="flex">
        <div class="pt-[2px]">
            <p class="font-bold text-4xl">
                {date}
            </p>
        </div>
        <div class="pl-2 text-sm flex flex-col justify-start">
            <p class="font-semibold">
                {month}
            </p>
            <p>
                {year}
            </p>
        </div>
    </div>
    <div class="text-sm">
        <p class="font-semibold">
            {day}
        </p>
    </div>
</div>

<style>

</style>