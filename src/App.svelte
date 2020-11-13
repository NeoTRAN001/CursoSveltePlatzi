<script>
	import About  from 'About.svelte';
	import Text   from './components/Text.svelte';
	import Person from './components/Person.svelte';
	import Skills from './components/Skills.svelte';
	import Input  from './components/Input.svelte';
	import Photos from './components/Photos.svelte';
	import ButtonCount from './components/ButtonCount.svelte';

	export let name;
	export let lastName; // Properties

	let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";

	const data = {
		name: "Neo",
		lastName: "TRAN",
		age: 20
	}
</script>

<main>
	<h1>Hello {name} { lastName }!</h1>
	<ButtonCount />
	<About />
	<Text anotherText = "Hola"/>
	<Text />
	<Person { ...data } />
	<Skills />
	<Input />
	<Photos />
	<img src="{ svelteLogo }" alt="Svelte Logo">
</main>

<style>

	:global(body) { /* GLobal Style in body*/
		background-color: #F2eee2;
		color: #0084f6;
	}

	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}

	:global(:root) { /* Variable */
		--theme-color: purple;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	main img {
		width: 30%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>