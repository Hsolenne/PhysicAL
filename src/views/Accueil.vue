<template>
  <div>
    <body>


    <div id="img-background">
    </div>

    <header>
      <h1>COURS DE FITNESS À DISTANCE</h1>
      <h2>Bougez simplement</h2>
      <a href="" class="accueil-button">Découvrir</a>
    </header>


    <main>

      <h2><span class="logo">Physic'AL</span>, c'est <span class="title_underline">quoi ?</span></h2>
      <PresentationSite/>


      <h2>Les <span class="title_underline">activités</span></h2>

      <section id="activité_liste">

        <PresentationActivite
            lienimg="src/assets/media/activites_img/img_activite_hiit.png"
            nom="HIIT"
            contenuCourt="Lorem lorem lorem pour la 1"
            contenuLong="Cours alliant cardio et
        renforcement musculaire en
        fractionné afin de brûler
        un maximum de calories
        en un temps très court activité 1"
            intensite=""

            v-bind:class="{ intensite3: true }"
        />

        <PresentationActivite
            lienimg="../../assets/media/activites_img/img_activite_zenfit.png"
            nom="Zenfit"
            contenuCourt="Lorem lorem lorem pour la 2"
            contenuLong="Cours alliant cardio et
        renforcement musculaire en
        fractionné afin de brûler
        un maximum de calories
        en un temps très court activité 2"
            intensite=""

            v-bind:class="{ intensite1: true }"
        />

      </section>


      <h2>Qui <span class="title_underline">suis-je ?</span></h2>




      <PresentationCoach/>


      <PresentationAbonnements/>


      <FooterPage/>


    </main>
    </body>

  </div>
</template>

<script>
import PresentationSite from "../components/accueil_visite/PresentationSite";
import PresentationCoach from "../components/accueil_visite/PresentationCoach";
import FooterPage from "../components/FooterPage";
import PresentationActivite from "../components/accueil_visite/PresentationActivite";
import PresentationAbonnements from "../components/accueil_visite/PresentationAbonnements.vue";


export default {
  name: "Accueil",
  components: {PresentationActivite, FooterPage, PresentationCoach, PresentationSite, PresentationAbonnements,}
}
</script>

<style lang="less" scoped>

/*

body {
  background-image: url("../assets/content/fils_fond_div.png");

}
*/


#img-background {
  height: 100vh;
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
  height: 100vh;
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

  & > a.accueil-button {
    font-family: 'Urbanist', sans-serif;
    font-weight: normal;
    display: block;
    text-decoration: none;
    font-size: 24px;

    background: var(--blue);
    padding: 10px 15px;
    border-radius: 50px;
    width: min-content;
    color: white;
    border: 1px solid var(--blue);

  }

  & > a.accueil-button:hover {
    background: none;
    color: var(--blue);


  }

}


main {



  display: flex;
  flex-direction: column;


  & h2 {
    font-size: 40px;
    margin: 60px auto;
    display: inline-block;

    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    text-align: center;


  }


  & #activité_liste {
    display: flex;
    justify-content: center;
  }

}


</style>
