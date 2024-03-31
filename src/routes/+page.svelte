<script lang="ts">
    import { onMount } from 'svelte';
    let blocks = [
      { id: 1, html: "<h1>Hello, World!</h1>" },
      { id: 2, html: "<p>This is a sample block.</p>" },
    ];
    let codeSpace = [];
    let preview = '';
  
    function renderHtml(block) {
      return { __html: block.html };
    }
  
    function updatePreview() {
      preview = codeSpace.map(block => block.html).join('');
    }
  
    function addToCodeSpace(block) {
      codeSpace.push({...block});
      updatePreview();
    }
  
    onMount(updatePreview);
  </script>
  
  <main>
    <section>
      <h2>Block List</h2>
      {#each blocks as block (block.id)}
        <div class="block" on:click="{() => addToCodeSpace(block)}">
          {@html renderHtml(block)}
        </div>
      {/each}
    </section>
    <section>
      <h2>Code Space</h2>
      {#each codeSpace as block (block.id)}
        <div class="block" contenteditable="true" on:input="{e => { block.html = e.target.innerHTML; updatePreview(); }}">
          {@html renderHtml(block)}
        </div>
      {/each}
    </section>
    <section>
      <h2>Preview</h2>
      <div class="preview">
        {@html preview}
      </div>
    </section>
  </main>
  
  <style>
    .block {
      border: 1px solid #ccc;
      padding: 1em;
      margin: 1em 0;
      cursor: pointer;
    }
    .preview {
      border: 1px solid #ccc;
      padding: 1em;
      margin: 1em 0;
    }
  </style>
  