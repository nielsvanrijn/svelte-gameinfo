<ul class="w-full space-y-4">
    {#each $games as game, i}
        <li class="rounded-lg shadow overflow-hidden relative flex flex-col bg-cover">
            <img src="{game.background_image}" alt="image of {game.name}">
            <div class="flex flex-col p-4 absolute bottom-0 left-0 w-full bg-white/50 backdrop-blur-sm">
                <h4 class="text-xl">{game.name}</h4>
                <p class="">{game.id}</p>
            </div>
        </li>
    {/each}
</ul>


<script lang="ts">
    // import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
    import { fetchGames, games } from '@/stores/game';
    fetchGames();
</script>