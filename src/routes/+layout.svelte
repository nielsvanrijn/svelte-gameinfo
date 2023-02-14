<div class="flex justify-between py-2 px-4 w-full bg-slate-200">
    <FontAwesomeIcon class="h-5" icon="{['fal', 'alien-8bit']}" />
    <FontAwesomeIcon class="h-5" icon="{['fad', 'bars']}" />
</div>
<slot />

<script lang="ts">
    import '@/app.css';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'

    import { library } from '@fortawesome/fontawesome-svg-core';
    import { far } from '@fortawesome/pro-regular-svg-icons';
    import { fas } from '@fortawesome/pro-solid-svg-icons';
    import { fal } from '@fortawesome/pro-light-svg-icons';
    import { fat } from '@fortawesome/pro-thin-svg-icons';
    import { fad } from '@fortawesome/pro-duotone-svg-icons';
    
    library.add(far, fas, fal, fat, fad);
</script>
