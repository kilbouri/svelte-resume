<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  export let color: string = "gray";
</script>

<div class="spinner" style={"color: " + color}></div>

<style>
  .spinner,
  .spinner:after {
    box-sizing: border-box;
  }

  .spinner {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .spinner:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6.4px solid currentColor;
    border-color: currentColor transparent currentColor transparent;
    animation: spin 1.2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
