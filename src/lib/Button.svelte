<script lang="ts">
	import { themeList } from '$lib/theme/themeList';
	import { currentTheme } from '$lib/theme/theme';
	let theme = false;

	$: {
		themeList.forEach((item) => {
			currentTheme.update((value) => {
				value[item.name] = theme ? item.mode.dark : item.mode.light;
				return value;
			});
		});
	}

	export let name = '';
	export let properties: any[] = [];

	let setting = properties.find((prop) => prop.name === name);
	let property = setting ? setting.properties : [];

	function showSubmenu(event: MouseEvent) {
		const target = event.currentTarget as HTMLElement;
		const submenu = target.querySelector('.submenu') as HTMLElement;
		submenu.hidden = false;
		submenu.classList.add('visible'); // Add the 'visible' class
	}

	function hideSubmenu(event: MouseEvent) {
		const target = event.currentTarget as HTMLElement;
		const submenu = target.querySelector('.submenu') as HTMLElement;
		submenu.hidden = true;
		submenu.classList.remove('visible'); // Remove the 'visible' class
	}

	function handleFocus(event: FocusEvent) {
		const target = event.currentTarget as HTMLElement;
		const submenu = target.querySelector('.submenu') as HTMLElement;
		submenu.hidden = false;
		submenu.classList.add('visible'); // Add the 'visible' class
	}

	function handleBlur(event: FocusEvent) {
		const target = event.currentTarget as HTMLElement;
		const submenu = target.querySelector('.submenu') as HTMLElement;
		submenu.hidden = true;
		submenu.classList.remove('visible'); // Remove the 'visible' class
	}
</script>

<div
	class={name}
	on:mouseover={showSubmenu}
	on:mouseout={hideSubmenu}
	on:focus={handleFocus}
	on:blur={handleBlur}
	tabindex="0"
	role="menu"
>
	<span class="material-symbols-outlined"> {setting.icon} </span>
	<div class="submenu" hidden>
		{#each property as prop (prop.id)}
			<div
				class="menu {prop.className}"
				style="background-color: {$currentTheme.header
					?.background}}; border-bottom: 1px solid {$currentTheme.header?.color}"
			>
				<span class="material-symbols-outlined"> {prop.icon} </span>
				<p>{prop.text}</p>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		align-items: center;
		width: 3rem;
		height: 3rem;
		border-radius: 0.5rem;
		text-align: center;

		span {
			font-size: 1.5rem;
			user-select: none;
			cursor: pointer;
			position: relative;
		}
	}

	[hidden] {
		display: none;
		position: fixed;
		top: 3rem;
	}

	.visible {
		display: grid !important;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		position: fixed;
		top: 3rem;
	}

	.menu {
		display: grid;
		width: calc(3rem + 6rem);
		grid-template-columns: 3rem 1fr;
		grid-template-rows: 1fr;
		align-items: center;
		justify-items: center;
		border-radius: 0;
		cursor: pointer;

		span {
			grid-column: 1 / 2;
			font-size: 1.5rem;
			user-select: none;
		}

		p {
			grid-column: 2 / 3;
			font-size: 1rem;
			user-select: none;
		}
	}
</style>
