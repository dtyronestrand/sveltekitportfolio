<script lang="ts">
  import type {Content} from '@prismicio/client';
    export let settings: Content.SettingsDocument;

    let open = false;
    function onLinkClick() {
        open = false;
    }
</script>

<header class="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4 relative">
    <nav>
        <div class="flex flex-col justify-between rounded-b-lg bg-primary-50 px-4 py-2 m-4 md:flex-row md:items-center md:rounded-xl">
            <div class="flex justify-between items-center">
                <a href="/" aria-label="homepage" class="text-xl font-extrabold tracking-tighter text-secondary-600">{settings.data.name}</a>
                <button aria-expanded={open} aria-label="open menu"
                on:click={() => open = true}
                class="block p-2 text-2xl text-primary-500 md:hidden">Open</button>
            </div>
            <ul class={`fixed inset-0 z-50 flex flex-col items-end gap-4 bg-primary-50 pr-14 transition-transform duration-300 ease-in-out md:hidden ${open ? 'translate-x-0' : 'translate-x-[100%]'}`}>
            <li>
                <button aria-expanded={open} aria-label="open menu"
                on:click={() => open = false}
                class="fixed right-4 top-3 block p-2 text-2xl text-primary-800 md:hidden">Close</button>
            </li>
            {#each settings.data.nav as navitem}
            <li class="first:mt-8 ">
                {navitem.label}
            </li>
            {/each}
            </ul>
                
                
        </div>
    </nav>
</header>