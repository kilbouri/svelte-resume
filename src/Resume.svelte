<script lang="ts">
  import Header from "./components/Header.svelte";
  import Tiny from "./components/Tiny.svelte";
  import Section from "./components/Section.svelte";
  import Education from "./components/sections/Education.svelte";
  import Experience from "./components/sections/Experience.svelte";
  import Skills from "./components/sections/Skills.svelte";
  import Projects from "./components/sections/Projects.svelte";

  // Import resume data
  import data from "./resume.json";

  const technicalExp = data.experience.filter(
    (item) => item.type === "technical",
  );
  const agricultureExp = data.experience.filter(
    (item) => item.type === "agriculture",
  );
</script>

<Header info={data.info}></Header>

<main>
  <div>
    {#if data.tiny_text}
      <Tiny>{data.tiny_text}</Tiny>
    {/if}

    {#if technicalExp}
      <Section name="Technical Experience">
        <Experience items={technicalExp} />
      </Section>
    {/if}

    {#if data.skills}
      <Section name="Technical Skills">
        <Skills items={data.skills} />
      </Section>
    {/if}

    {#if data.education}
      <Section name="Education">
        <Education items={data.education} />
      </Section>
    {/if}
  </div>

  <div>
    {#if agricultureExp}
      <Section name="Agricultural Experience">
        <Experience items={agricultureExp} />
      </Section>
    {/if}

    {#if data.projects}
      <Section name="Projects">
        <Projects items={data.projects} />
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

  main > div {
    width: 49%;
  }
</style>
