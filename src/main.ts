import "./global.css";
import Resume from "./Resume.svelte";

const resume = new Resume({
  target: document.getElementById("app")!,
});

export default resume;
