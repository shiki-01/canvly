<script lang="ts">
	let theme = false;
	let themeList = [
		{
			name: 'header',
			mode: {
				light: {
					background: '#b1e7da',
					color: '#3f3f3f'
				},
				dark: {
					background: '#546762',
					color: '#f0f0f0'
				}
			}
		},
		{
			name: 'page',
			mode: {
				light: {
					background: '#f0f0f0',
					color: '#3f3f3f'
				},
				dark: {
					background: '#3f3f3f',
					color: '#f0f0f0'
				}
			}
		}
	];

	type ThemeType = {
		[key: string]: {
			background: string;
			color: string;
		};
	};

	let currentTheme: ThemeType = {};

	$: {
		themeList.forEach((item) => {
			currentTheme[item.name] = theme ? item.mode.dark : item.mode.light;
		});
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<main>
	<header style="background-color: {currentTheme.header?.background}; color: {currentTheme.header?.color};">
		<div>
			<div class="lang">
				<span class="material-symbols-outlined">language</span>
			</div>
			<div class="upload">
				<span class="material-symbols-outlined"> upload </span>
			</div>
			<div class="download">
				<span class="material-symbols-outlined"> download </span>
			</div>
			<div class="save">
				<span class="material-symbols-outlined"> save </span>
			</div>
		</div>
		<div>
			<div class="undo">
				<span class="material-symbols-outlined"> undo </span>
			</div>
			<div class="redo">
				<span class="material-symbols-outlined"> redo </span>
			</div>
			<div class="file">
				<span class="material-symbols-outlined"> folder </span>
			</div>
		</div>
		<div>
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
			<div class="route"></div>
			<div class="preview_area"></div>
		</div>
		<div class="hint">
			<div class="h"></div>
			<div class="hint_area"></div>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-rows: 3rem 1fr;
		height: 100vh;

		header {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			padding: 0 25px;

			div {
				align-items: center;
				display: grid;
				grid-template-columns: repeat(4, 3rem) 1fr;
				width: 100%;
				height: 100%;

				div {
					display: grid;
					grid-template-columns: 1fr;
					grid-template-rows: 1fr;
					width: 3rem;
					height: 3rem;
					border-radius: 0.5rem;
					text-align: center;

					span {
						font-size: 1.5rem;
					}
				}

				&:last-child {
					justify-self: end;
					grid-template-columns: 1fr 4rem 3rem;

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
						}
					}
				}
			}
		}

		.page {
			display: grid;
			grid-template-columns: 3fr 2fr;
			grid-template-rows: calc(((100vw - 75px) / 3 * 9 / 16) + 40px) 1fr;
			gap: 25px;
			margin: 25px;

			.edit {
				grid-row: 1 / 3;
				display: grid;
				grid-template-columns: 200px 1fr;
				grid-template-rows: 40px 1fr;

				.block_list {
					grid-row: 2 / 3;
					background-color: #f0f0f0;
				}

				.edit_space {
					grid-column: 2 / 3;
					grid-row: 1 / 3;
					background-color: #f0f0f0;
					display: grid;
					grid-template-rows: 40px 1fr;

					.tab {
						width: 100%;
						height: 100%;
						background-color: #f0f0f0;
					}

					.edit_area {
						width: 100%;
						height: 100%;
						background-color: #b4b4b4;
					}
				}
			}

			.preview {
				background-color: #f0f0f0;

				display: grid;
				grid-template-rows: 40px 1fr;

				.route {
					width: 100%;
					height: 100%;
					background-color: #f0f0f0;
				}

				.preview_area {
					width: 100%;
					height: 100%;
					background-color: #b4b4b4;
				}
			}

			.hint {
				background-color: #f0f0f0;
				display: grid;
				grid-template-rows: 40px 1fr;

				.h {
					width: 100%;
					height: 40px;
					background-color: #f0f0f0;
				}

				.hint_area {
					width: 100%;
					height: 100%;
					background-color: #b4b4b4;
				}
			}
		}
	}
</style>
