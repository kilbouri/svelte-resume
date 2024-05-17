<script lang="ts">
  import Header from "./components/Header.svelte";
  import Tiny from "./components/Tiny.svelte";
  import Section from "./components/Section.svelte";
  import Education from "./components/sections/Education.svelte";
  import Experience from "./components/sections/Experience.svelte";
  import Extracurricular from "./components/sections/Extracurricular.svelte";
  import Skills from "./components/sections/Skills.svelte";
  import Projects from "./components/sections/Projects.svelte";

  // Import resume data
  import data from "./resume.json";
</script>

<Header info={data.info}></Header>

<main>
  <div style="width: 50%">
    {#if data.tiny_text}
      <Tiny>{data.tiny_text}</Tiny>
    {/if}

    {#if data.experience}
      <Section name="Experience">
        <Experience items={data.experience} />
      </Section>
    {/if}

    {#if data.skills}
      <Section name="Skills">
        <Skills items={data.skills} />
      </Section>
    {/if}
  </div>

  <div style="width: 45%;">
    {#if data.education}
      <Section name="Education">
        <Education items={data.education} />
      </Section>
    {/if}

    {#if data.projects}
      <Section name="Projects">
        <Projects items={data.projects} />
      </Section>
    {/if}

    {#if data.extracurricular}
      <Section name="Extracurricular">
        <Extracurricular items={data.extracurricular} />
      </Section>
    {/if}
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
