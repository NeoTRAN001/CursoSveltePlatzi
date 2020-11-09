<script>
    export let name = "World";
</script>

<main>
    <input type="text" bind:value="{ name }">
    <p>Hello { name }</p>
</main>