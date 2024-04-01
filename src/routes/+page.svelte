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

	import Button from '$lib/Button.svelte';

	const settings = [
		{
			name: 'setting',
			icon: 'settings',
			properties: []
		},
		{
			name: 'add',
			icon: 'add_box',
			properties: [
				{ id: 1, className: 'setting', icon: 'upload', text: '読み込む' },
				{ id: 2, className: 'lang', icon: 'add', text: '新規' }
			]
		},
		{
			name: 'save',
			icon: 'save',
			properties: [
				{ id: 1, className: 'save', icon: 'save', text: '保存' },
				{ id: 2, className: 'save', icon: 'save_alt', text: '新規保存' }
			]
		},
		{
			name: 'undo',
			icon: 'undo',
			properties: []
		},
		{
			name: 'redo',
			icon: 'redo',
			properties: []
		},
		{
			name: 'file',
			icon: 'folder',
			properties: []
		},
		{
			name: 'help',
			icon: 'info',
			properties: []
		}
	];

	import Preview from '$lib/Preview.svelte';
	import Hint from '$lib/Hint.svelte';
</script>

<main style="background-color: {$currentTheme.main.background};">
	<header
		style="background-color: {$currentTheme.header?.background}; color: {$currentTheme.header
			?.color};"
	>
		<div>
			<Button name="setting" properties={settings} />
			<Button name="add" properties={settings} />
			<Button name="save" properties={settings} />
			<div></div>
		</div>
		<div>
			<Button name="undo" properties={settings} />
			<Button name="redo" properties={settings} />
			<Button name="file" properties={settings} />
			<div></div>
		</div>
		<div id="last">
			<div class="color">
				<input type="checkbox" id="color" name="color" bind:checked={theme} />
				<label for="color"><span></span></label>
			</div>
			<div class="help">
				<span class="material-symbols-outlined"> info </span>
			</div>
		</div>
	</header>
	<div class="page">
		<div class="edit">
			<div class="block_list"></div>
			<div class="edit_space">
				<div class="tab"></div>
				<div class="edit_area"></div>
			</div>
		</div>
		<div class="preview">
			<Preview />
		</div>
		<div class="hint">
			<Hint />
		</div>
	</div>
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-rows: 3rem 1fr;
		height: 100vh;
		transition: 0.3s ease;

		header {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			padding: 0 25px;
			transition: 0.3s ease;

			div {
				align-items: center;
				display: grid;
				grid-template-columns: repeat(4, 3rem) 1fr;
				width: 100%;
				height: 100%;
			}

			#last {
				justify-self: end;
				grid-template-columns: 1fr 4rem 3rem;
				user-select: none;

				.color {
					display: block;
					grid-column: 2 / 3;
					width: 4rem;
					height: 3rem;

					label {
						display: flex;
						align-items: center;
						width: 4rem;
						height: 1.8rem;
						margin: 0.6rem 0;
						background: #f0f0f0;
						border-radius: 2rem;
						cursor: pointer;

						span {
							display: block;
							width: 1.5rem;
							height: 1.5rem;
							background: #b4b4b4;
							border-radius: 50%;
							transform: translateX(calc(0.3rem / 2));
							transition: all 0.3s;
						}
					}

					input {
						display: none;

						&:checked ~ label span {
							transform: translateX(calc(4rem - 1.5rem - 0.3rem / 2));
						}
					}
				}

				.help {
					grid-column: 3 / 4;
					display: grid;
					grid-template-columns: 1fr;
					grid-template-rows: 1fr;
					width: 3rem;
					height: 3rem;
					border-radius: 0.5rem;
					text-align: center;

					span {
						font-size: 1.5rem;
						user-select: none;
						cursor: pointer;
					}
				}
			}
		}

		.page {
			display: grid;
			grid-template-columns: 3fr 2fr;
			grid-template-rows: calc(((100vw - 75px) / 3 * 9 / 16) + 30px) 1fr;
			gap: 25px;
			margin: 25px;

			.edit {
				grid-row: 1 / 3;
				display: grid;
				grid-template-columns: 200px 1fr;
				grid-template-rows: 40px 1fr;

				.block_list {
					grid-row: 2 / 3;
				}

				.edit_space {
					grid-column: 2 / 3;
					grid-row: 1 / 3;
					display: grid;
					grid-template-rows: 40px 1fr;

					.tab {
						width: 100%;
						height: 100%;
					}

					.edit_area {
						width: 100%;
						height: 100%;
					}
				}
			}

			.preview {
				width: 100%;
				height: 100%;
			}

			.hint {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>