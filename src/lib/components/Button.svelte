<script lang="ts">
import {type LinkField, type KeyTextField} from '@prismicio/client';
import {PrismicLink} from '@prismicio/svelte';
import IconArrow from '~icons/ic/baseline-arrow-outward';
export let linkfield: LinkField;
export let label: KeyTextField;
export let showicon: boolean = true;
let className: string = "";
export {className as class};
</script>

<PrismicLink field={linkfield} class={`group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-tertiary-900 bg-primary-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105 ${className} `}>
    <span class={`absolute inset-0 z-0 h-full rounded bg-secondary-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 $translate-y-0`}></span>
    <span class="relative flex items-center gap-2 justify-center">{label}</span>
    {#if showicon}
    <IconArrow/>
    {/if}
</PrismicLink>