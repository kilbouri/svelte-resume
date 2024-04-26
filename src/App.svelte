<script lang="ts">
  import LoadingSpinner from "./components/LoadingSpinner.svelte";
  import Resume from "./Resume.svelte";

  // This should be a Resume object, but we can't know for sure.
  const resumeData: any = fetch("./resume.json").then((r) => r.json());
</script>

{#await resumeData}
  <LoadingSpinner color="grey" />
{:then data}
  <Resume {data} />
{/await}
