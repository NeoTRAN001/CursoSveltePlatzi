<script>
    let someText = `Frontend Developer at Platzi`;
    let count = 0;
    let styles = { darkMode: false }

    function handleClick() {
        count += 1;
    }

    function toggle() {
        styles.darkMode = !styles.darkMode;

        window.document.body.classList.toggle("dark-mode");
    }
</script>

<main>

    {#if !styles.darkMode}
        <p>{someText}</p>
    {:else}
        <p>
            <span>Hello DarkMode</span>
        </p>
    {/if}
    <button on:click="{handleClick}">Click { count === 0 ? '' : count }</button>
    <button on:click={toggle}>{ styles.darkMode ? 'White' : 'Dark' } Mode</button>
</main>

<style>
    p {
        color: var(--theme-color);
        font-size: 20px;
    }
</style>