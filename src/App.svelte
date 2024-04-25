<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Education from "./lib/Education.svelte";
  import Experience from "./lib/Experience.svelte";
  import Skills from "./lib/Skills.svelte";
  import Projects from "./lib/Projects.svelte";
  import Extracurricular from "./lib/Extracurricular.svelte";
  import Tiny from "./lib/Tiny.svelte";
</script>

<Header />
<main>
  <div style="width: 50%">
    <Tiny />
    <Experience />
    <Extracurricular />
  </div>

  <div style="width: 45%;">
    <div class="tiny-adjust"></div>
    <Education />
    <Skills />
    <Projects />
  </div>
</main>

<style>
  main {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
</style>
