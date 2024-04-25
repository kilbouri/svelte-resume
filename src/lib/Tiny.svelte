<div class="tiny">
  {#await fetch("./text.json").then((r) => r.json())}
    <p>Loading tiny text...</p>
  {:then text}
    <p>{text.text}</p>
  {/await}
</div>

<style>
  .tiny,
  p {
    font-size: 1px;
    color: #fff;

    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
</style>
