<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
    import type {Content} from '@prismicio/client';
    import Bounded from '$lib/components/Bounded.svelte';
    import Heading from '$lib/components/Heading.svelte';
	import { components } from '$lib/slices';
    import {formatDate} from '$lib/formatDate'
	export let page: Content.BlogpostDocument | Content.ProjectDocument;
    console.log(page)
    const formattedDate = formatDate(page.data.date);
</script>
<Bounded tag="article">
    <div class="rounded-2xl border-2 border-secondary-900 bg-primary-900 px-4 py-10 md:px-8 md:py-20">
        <Heading tag="h1">{page.data.title}</Heading>
        <div class="flex gap-4 text-amber-400">
            {#each page.tags as tag}
            <span class="text-xl font-bold">{tag}</span>
            {/each}
        </div>
        <p class="mt-8 border-b border-primary-600 text-xl font-medium text-primary-300">{formattedDate}</p>
        <div class="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
        <SliceZone slices={page.data.slices} {components} />
    </div>
</div>
    </Bounded>