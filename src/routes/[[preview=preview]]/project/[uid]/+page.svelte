<script>
	import { page } from "$app/stores";
    import ContentBody from "$lib/components/ContentBody.svelte";
    export let data;
</script>

<ContentBody page={data.page} />