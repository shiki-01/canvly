<script lang="ts">
    import { onMount } from 'svelte';
    let el: HTMLElement;
  
    onMount(() => {
      // ドロップのロジックをここに実装します。
    });
  </script>
  
  <div bind:this={el}>
    <slot></slot>
  </div>
  