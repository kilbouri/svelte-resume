<script lang="ts">
  import type { Info } from "../lib/types";

  export let info: Info;
</script>

<h1>{info.name}</h1>

<div class="links">
  <span>
    <i class="fa fa-envelope"></i>
    <a href="mailto:{info.email}" target="_blank">{info.email}</a>
  </span>

  {#if info.phone}
    <span>
      <i class="fa fa-phone"></i>
      {info.phone}
    </span>
  {/if}

  {#if info.website}
    <span>
      <i class="fa fa-link"></i>
      <a href="https://{info.website}" target="_blank">{info.website}</a>
    </span>
  {/if}

  {#if info.github}
    <span>
      <i class="fa fa-github"></i>
      <a href="https://github.com/{info.github}" target="_blank">
        {info.github}
      </a>
    </span>
  {/if}

  {#if info.linkedin}
    <span>
      <i class="fa fa-linkedin"></i>
      <a href="https://linkedin.com/in/{info.linkedin}" target="_blank">
        {info.linkedin}
      </a>
    </span>
  {/if}
</div>

<style>
  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  .links {
    display: flex;
    justify-content: left;
    padding-bottom: 15px;
  }

  .links > span {
    font-size: 12px;
    font-weight: 600;
    padding-right: 15px;
  }
</style>
