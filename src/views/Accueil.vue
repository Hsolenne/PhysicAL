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

      <PresentationSite/>

      <!--      <PresentationActivites/>-->

      <PresentationCoach/>


      <!--      <PresentationAbonnements/>-->


      <FooterPage/>


    </main>
    </body>

  </div>
</template>

<script>
import PresentationSite from "../components/accueil_visite/PresentationSite";
import PresentationCoach from "../components/accueil_visite/PresentationCoach";
import FooterPage from "./FooterPage";

export default {
  name: "Accueil",
  components: {FooterPage, PresentationCoach, PresentationSite}
}
</script>

<style lang="less" scoped>

#img-background {
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;

  //background-image: url("");
  background-color: #70707020;

  z-index: -10;
}

header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

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


</style>
