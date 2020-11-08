import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Neo',
		lastName: 'TRAN'
	}
});

export default app;