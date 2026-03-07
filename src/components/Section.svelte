<script lang="ts">
  export let name: string;
</script>

<div class="section" id={name}>
  <h1>{name || ""}</h1>
  <hr />
  <slot />
</div>

<style>
  .section {
    margin-top: 8px;
  }

  h1 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.2rem;
  }
</style>
