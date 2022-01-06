<template>
  <div>

    <div id="img-background">
    </div>

    <header>
      <h1>Nutrition</h1>
      <h2>Bougez simplement</h2>
    </header>

    <main>
      <h2>Tous nos conseils <span class="title_underline">nutrition</span></h2>
      <section id="liste_articles" class="white_bg">


        <ElementNutrition/>

      </section>


    </main>


    <footer>
      <FooterPage/>
    </footer>

  </div>
</template>

<script>

import FooterPage from "../components/FooterPage";
import ElementNutrition from "../components/nutrition/ElementNutrition.vue";


export default {
  name: "Nutrition",
  components: {ElementNutrition, FooterPage},
}
</script>


<style scoped lang="less">


#img-background {
  height: 40vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;

  background-color: #70707020;

  background-image: url("../assets/media/Coach_fitness-fond_flou.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: darken;

  z-index: -10;
}

header {
  padding: 0 40px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0;

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


.white_bg {
  margin: 25px;
  padding: 25px;

  width: calc(100% - 100px);
  width: -webkit-fill-available;

  background: white;
}

article {

  margin-bottom: 50px;


  & h3 {
    font-family: 'Merriweather', serif;
  }

  & p {
    font-size: 20px;
    margin: 20px 0 0 0 ;
  }

  & img {
    float: left;
    height: 150px;

    width: 150px;
    margin: 20px 20px 20px 0;
  }

}


</style>
