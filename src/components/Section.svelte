<script lang="ts">
  export let name: string;
</script>

<div class={name}>
  <h1>{name || ""}</h1>
  <hr />
  <slot />
</div>

<style>
  h1 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
</style>
