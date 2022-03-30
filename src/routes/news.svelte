<script>
import {
  onMount
} from "svelte"
import Head from "$lib/components/Head.svelte"
import axios from "axios"

const apiKey = "4cd48c56bd1e413e864513c64d58954a"

onMount(() => fetchData())
let news = []
const sortOption='relevancy'
// const cities = "nantes paris marseille lille blois tours".split(" ")
const url = `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${apiKey}&sortBy=${sortOption}`
async function fetchData() {
  const {
    data
  } = await axios.get(url)
  console.log(data.articles)
  data.articles.map(article => {
    news = [...news, article]

  })


  return news
}
$: console.log(url)

$: console.table(news)
</script>
<Head title="Quoi d'neuf, docteur?" />

<div class="news">
    {#each news as {title, urlToImage, content, description, url, author}}
    <a href={url} target="_blank" >
        <figure >
            <div class="frame">
                <img src={urlToImage} alt="{title}">

            </div>
            <figcaption>
                <h3>{title}</h3>
                {#if typeof content=="string"}
                  <p><q>{content}</q></p>
                  {:else}
                  <p class="txt-red">Texte non disponible</p>
                {/if}
                {#if typeof author=="string"}
                <p ><em>{author}</em></p>

                  {:else}
                  <p class="txt-red">Auteur non cité</p>
                {/if}

            </figcaption>
        </figure>
    </a>
    {/each}

</div>



<style lang="scss" >
.news {
  text-align: center;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(1, 1fr);

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

}

a {
  text-decoration: none;

  &:hover {
    filter: brightness(110%);
  }
}


figcaption {
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.frame img,
.frame {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

}

img[alt] {

  background: gray;
  display: flex;
  justify-content: stretch;
  align-items: stretch;

}
.txt-red {
  color: red;
}

</style>
