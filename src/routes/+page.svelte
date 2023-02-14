<div class="flex flex-col px-4">
    <div class="flex items-center mx-auto space-x-4 py-5">
        <FontAwesomeIcon class="h-5" icon="{['fad', 'trophy-star']}" />
        <h1 class="text-4xl font-bold">Best of the year</h1>
    </div>
    <GameList />
</div>

<script lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
    import GameList from '@/shared/components/GameList.svelte';
</script>