<template>
  <div>
    <section v-for="article in ArticleNutrition" :key="article.id" >
      <article id="article">
        <h2>{{article.acf.titre}}</h2>
        <img :src="article.acf.image">


        <p>{{article.acf.description}}</p>

      </article>
    </section>
  </div>
</template>


<script>
import param from '@/param/param';
import axios from "axios";

export default {
  name: 'ElementNutrition',
  data() {
    return {
      ArticleNutrition: []
    }
  },
  created() {
    axios.get(param.host + "/article_nutrition")
        .then(response => {
          console.log("ReponseSolenne", response);
          this.ArticleNutrition = response.data;
          console.log("ReponseSolenne2", this.ArticleNutrition);
        })
        .catch(error => console.log(error))
  }
}
</script>
<style scoped lang="less">


header {
  padding: 0 40px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 80px;

  & > * {
    margin-bottom: 50px;
  }

  & > h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
    font-size: 60px;
    max-width: 423px;
    width: 100%;
  }

  & > h2 {
    font-family: 'Merriweather', serif;
    font-weight: lighter;
    font-size: 30px;
    max-width: 423px;
    width: 100%;

  }
}


main {
  display: flex;
  flex-direction: column;


  & h2 {
    font-size: 40px;
    margin: 20px auto;
    display: inline-block;

    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    text-align: center;


  }

}


main {


  margin-top: 50px;
  width: 100%;
  background: var(--light_gray);

  display: flex;
  align-items: center;


  & h2 {
    font-size: 40px;
    margin: 20px auto;
    display: inline-block;

    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    text-align: center;

  }


}


article {

  margin-bottom: 50px;


  & h3 {
    font-family: 'Merriweather', serif;
  }

  & p {
    font-size: 20px;
    margin: 20px 0 0 0;
    font-family: 'Urbanist', sans-serif;
  }

  & img {
    float: left;
    height: 150px;

    width: 150px;
    margin: 20px 20px 20px 0;
  }
}


</style>