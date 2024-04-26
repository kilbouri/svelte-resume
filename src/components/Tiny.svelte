<p class="tiny">
  <slot />
</p>

<style>
  p.tiny {
    --height: 3px;
    --font-size: calc(var(--height) / 3);

    font-size: var(--font-size);
    height: var(--height);
    overflow: hidden;

    color: #fff;

    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    margin: 0px;
    margin-top: calc(-1 * var(--height));
    padding: 0px;
  }
</style>
