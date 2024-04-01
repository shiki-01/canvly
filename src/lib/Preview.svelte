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

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// JSONデータをインポート
	import pageInfo from '$lib/preview.json';

	// Svelteストアを作成
	export const previewContent = writable('');

	onMount(() => {
		// "page1"の"connectedBlock"のみを取得
		const connectedBlocks =
			pageInfo.pageInfo.find((page) => page.name === 'page1')?.connectedBlock || [];

		// HTML文字列を作成
		let htmlString = '';
		connectedBlocks.forEach((block) => {
			if (block.property) {
				const { text, style, class: className } = block.property;
				const elementName = block.element.replace('<', '').replace('>', '');
				htmlString += `<${elementName} style="${style}" class="${className}">${text}</${elementName}>`;
			} else {
				htmlString += block.element;
			}
		});

		// HTML文字列をSvelteストアにセット
		previewContent.set(htmlString);
	});
</script>

<span>
	<div class="route" style="background-color: {$currentTheme.preview_route.background};">
		<div class="url" style="color: {$currentTheme.preview_route.color};">/about</div>
		<div
			class="fullscreen material-symbols-outlined"
			style="color: {$currentTheme.preview_route.color};"
		>
			fullscreen
		</div>
	</div>
	<div
		class="preview_area"
		style="border: 2px solid {$currentTheme.preview_route.background};border-top: none;"
	>
		{@html $previewContent}
	</div>
</span>

<style lang="scss">
	span {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-rows: 30px 1fr;
	}
	.route {
		width: 100%;
		height: 100%;
		transition: 0.3s ease;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		display: grid;
		grid-template-columns: 1fr 30px;
		align-items: center;

		.url {
			padding: 0 10px;
			font-size: 1rem;
			font-weight: 500;
			color: #333;
			transition: 0.3s ease;
		}

		.fullscreen {
			user-select: none;
			cursor: pointer;
			transition: 0.3s ease;
		}
	}

	.preview_area {
		width: 100%;
		height: 100%;
		transition: 0.3s ease;
		background-color: #f0f0f0;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
</style>
