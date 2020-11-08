<script>
    let someText = `Frontend Developer at Platzi`;
    let count = 0;

    function handleClick() {
        count += 1;
    }
</script>

<main>
    <p>{someText}</p>
    <button on:click="{handleClick}">Click { count === 0 ? '' : count }</button>
</main>

<style>
    p {
        color: var(--theme-color);
        font-size: 20px;
    }
</style>