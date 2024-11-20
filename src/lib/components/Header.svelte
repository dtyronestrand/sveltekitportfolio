<script lang="ts">
  import  {type Content, isFilled} from '@prismicio/client';
  import NavbarLink from '$lib/components/NavbarLink.svelte';
  import Button from '$lib/components/Button.svelte';
  import IconMenu from '~icons/ic/baseline-menu';
  import IconClose from '~icons/ic/baseline-close';
    export let settings: Content.SettingsDocument;

    let open = false;
    function onLinkClick() {
        open = false;
    }
</script>

<header class="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4 relative">
    <nav>
        <div class="flex flex-col justify-between rounded-b-lg bg-tertiary-50 px-4 py-2 m-4 md:flex-row md:items-center md:rounded-xl">
            <div class="flex justify-between items-center">
                <a href="/" aria-label="homepage" class="text-xl font-extrabold tracking-tighter text-secondary-600">{settings.data.name}</a>
                <button aria-expanded={open} aria-label="open menu"
                on:click={() => (open = true)}
                class="block p-2 text-2xl text-primary-500 md:hidden"><IconMenu/></button>
            </div>
            <ul class={`fixed inset-0 z-50 flex flex-col items-end gap-4 bg-tertiary-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden ${open ? 'translate-x-0' : 'translate-x-[100%]'}`}>
            <li>
                <button aria-expanded={open} aria-label="open menu"
                on:click={() => (open = false)}
                class="fixed right-4 top-3 block p-2 text-2xl text-primary-800 md:hidden"><IconClose/></button>
            </li>
            {#each settings.data.nav as {label, link}}
            <li class="first:mt-8 ">
               <NavbarLink field={link} label={label} {onLinkClick} type="mobile"/>
            </li>
            {/each}
            {#if isFilled.link(settings.data.cta_link)}
           <li> <Button linkfield={settings.data.cta_link} label={settings.data.cta_label} class="ml-3"/></li>
            {/if}
            </ul>
                
         <ul class="realative z-50 hidden flex-row items-center gap-1 md:flex py-0 bg-transparent" >
            {#each settings.data.nav as {label, link}}
            <li >
               <NavbarLink field={link} label={label} {onLinkClick} type="desktop"/>
            </li>
            {/each}
            {#if isFilled.link(settings.data.cta_link)}
           <li><Button linkfield={settings.data.cta_link} label={settings.data.cta_label} /></li>
            {/if}
         </ul>     
        </div>
    </nav>
</header>