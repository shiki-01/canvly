<script lang="ts">
  import { onMount } from 'svelte';
  let el: HTMLElement;

  onMount(() => {
    // ドラッグアンドドロップのロジックをここに実装します。
  });
</script>

<div bind:this={el}>
  <slot></slot>
</div>
