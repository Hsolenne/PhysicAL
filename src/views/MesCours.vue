<template>
  <div>

    <div id="img-background">
    </div>

    <header>
      <h1>Mes Cours</h1>
      <h2>Bougez simplement</h2>
    </header>

    <main>

      <div id="liste_mes_activites">
        <MesActivites
            nom="HIIT"
            lienimg=""
            lienactivite=""

            v-bind:class="abonne"
        />
        <MesActivites
            nom="ZENFIT"
            lienimg=""
            lienactivite=""

            v-bind:class="non_abonne"

        />

      </div>
    </main>


    <footer>
      <FooterPage/>
    </footer>

  </div>
</template>

<script>

import FooterPage from "../components/FooterPage";

import MesActivites from "../components/mescours/MesActivites";


export default {
  name: "MesCours",
  components: {FooterPage, MesActivites},
}
</script>


<style scoped lang="less">

#liste_mes_activites {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  & > div {
    @media (max-width: 847px) {
      margin: 0 auto 20px auto;
    }

    @media (max-width: 480px) {
      width: 90%;

      width: -webkit-fill-available;
      margin: 0 20px 20px;
    }
  }
}

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
  margin-bottom: 80px;

  & > * {
    margin: 40px 0;
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
    margin: 60px auto;
    display: inline-block;

    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    text-align: center;
  }
}

</style>
