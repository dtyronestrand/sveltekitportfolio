<script lang="ts">
	import type { ImageField } from '@prismicio/client';
    import { PrismicImage} from '@prismicio/svelte';
    import clsx from 'clsx';
    export let image: ImageField;
    let className:string = "";
    export {className as class};
    
</script>

<div class={clsx(`relative h-full w-full`, className)}>
    <div class="avatar aspect-square overflow-hidden rounded-3xl border-2 border-primary-700">
        <PrismicImage field={image} class="avatar-image h-full w-full object-fill" imgixParams={{q:90}}/>
    </div>
</div>
<style>
    .avatar {
   perspective: 500px;
   perspective-origin: 150% 150%;
    }
</style>