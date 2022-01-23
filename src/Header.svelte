<script>
    const getInfo = async () => {
        let res = await fetch("./header.json");
        let info = await res.json();
        return info;
    }
    const infoPromise = getInfo();
</script>
{#await infoPromise}
    <p>Loading info...</p>
{:then info} 
<h1>{info.name}</h1>
<div class="links">
    <span>
        <i class="fa fa-envelope"></i>
        <a href="mailto:{info.email}" target="_blank">{info.email}</a>
    </span>
    <span>
        <i class="fa fa-phone"></i>
        {info.phone}
    </span>
    <span>
        <i class="fa fa-link"></i>
        <a href="https://{info.website}" target="_blank">{info.website}</a>
    </span>
    <span>
        <i class="fa fa-github"></i>
        <a href="https://github.com/{info.github}" target="_blank">{info.github}</a>
    </span>
    <span>
        <i class="fa fa-linkedin"></i>
        <a href="https://linkedin.com/in/{info.linkedin}" target="_blank">{info.linkedin}</a>
    </span>
</div>    
{/await}


<style>
    h1{
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