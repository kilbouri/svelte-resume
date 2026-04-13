<script lang="ts">
  export let name: string;
  export let hint: string | undefined = undefined;
</script>

<div class="section" id={name}>
  <div class="heading">
    <h1 class="section-label">{name || ""}</h1>
    {#if hint}<span class="hint">{hint}</span>{/if}
  </div>
  <hr />
  <slot />
</div>

<style>
  .section {
    margin-top: 8px;
  }

  .heading {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 1ch;
  }

  .section-label {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.2rem;
  }

  .hint {
    font-weight: 400;
    text-transform: lowercase;
    font-size: 0.75rem;

    color: #555;
  }
</style>
