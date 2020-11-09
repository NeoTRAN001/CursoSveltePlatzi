<script>
    import { onMount } from 'svelte';
    
    let photos = [];

    onMount(async () => {
        console.log('OnMount')
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
        photos = await response.json();
    });
</script>

<main>
    {#each photos as photo}
        <figure>
            <img src="{photo.thumbnailUrl}" alt="{photo.title}">
            <figcaption>{ photo.title }</figcaption>
        </figure>
    {:else}
        <p>Loading..,</p>
    {/each}
</main>

<style>
    main {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 8px;
    }
</style>