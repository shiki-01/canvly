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
</script>

<span>
	<div class="h" style="background-color: {$currentTheme.preview_route.background};">
		<p style="color: {$currentTheme.preview_route.color};">ヒント</p>
	</div>
	<div class="hint_area" style="border: 2px solid {$currentTheme.preview_route.background};"></div>
</span>

<style lang="scss">
	span {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-rows: 30px 1fr;
	}

	.h {
		width: 100%;
		height: 100%;
		transition: 0.3s ease;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
        display: grid;
        align-items: center;

        p {
            padding: 0 10px;
            transition: 0.3s ease;
            font-size: 1rem;
        }
	}

	.hint_area {
		width: 100%;
		height: 100%;
		background-color: #f0f0f0;
		transition: 0.3s ease;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
</style>
