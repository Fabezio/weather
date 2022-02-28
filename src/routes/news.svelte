<script>
  import {onMount} from "svelte"
  import Head from "$lib/components/Head.svelte"
  import axios from "axios"
  
  const apiKey = "4cd48c56bd1e413e864513c64d58954a"
  const city = "nantes"
  onMount(()=> fetchData())
  let news =  []
  const cities = "nantes paris marseille lille blois tours".split(" ")
  const url = `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${apiKey}&sortBy=popularity`
  async function fetchData () {
    const {data} = await axios.get(url)
    console.log(data.articles)
    data.articles.map(article => {
      news = [...news, article]

    })
    
    // console.log(JSON.stringify(data))
    return news
  }
  $: console.log(url)
  // fetchData()
  $: console.table(news)

</script>
<Head title="Quoi d'neuf, docteur?" />
<!-- <h2></h2> -->
<div class="news">
{#each news as {title, urlToImage, content, description, url, author}}
<a href={url} target="_blank" >
<figure >
  <div class="frame">
    <img src={urlToImage} alt="{title}">

  </div>
<figcaption>
  <h3>{title}</h3>
  <p><q>{content}</q></p>
  <p>{author}</p>

</figcaption>
</figure>
</a>
{/each}
<!-- {JSON.stringify(news)} -->
</div>

<!-- <div>température: {weather.main.temp}</div> -->

<style>
  /* h3,
  div
   {color: var(--light-txt);} */
  /* li {
text-align: justify;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
  } */
  /* li span {
    position: relative;
  } */
  .news {
    text-align: center;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(1, 1fr);
    /* justify-content: center; */
  }
  
  figure {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 300px 1fr;
    border-radius: 0 8px 8px 0;
    padding-right: 1em;
  }
  .frame {
    height: 200px;
    border: 1px solid gray;
    /* border-radius */
  }
  a {
    text-decoration: none;
  }
  a:hover {
    /* box-shadow: 1px 1px 0 gray; */
    filter: brightness(110%);
    /* background: deepskyblue; */


  }
  figcaption {
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  /* .grid-info {
    max-width: 15em;
  } */

  .frame img ,
  .frame {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-height: 50%; */
  }
  img[alt] {
    /* content: "info non disponible" */
    background: gray;
    display: flex;
    justify-content: stretch;
    align-items: stretch;

  }
  

  /* 
  .list-start {
    min-width: 5em; 
  }
  */
</style>