<script>
    const getText = async () => {
            let res = await fetch("./text.json");
            let text = await res.json();
            return text;
        }
    const textPromise = getText();
</script>


<div class="tiny">
    {#await textPromise}
        <p>Loading tiny text...</p>
    {:then text} 
        <p>{text.text}</p>
    {/await}
</div>

<style>
    .tiny, p{
        font-size: 1px;
        color: #fff;
        -webkit-print-color-adjust: exact
    }
</style>