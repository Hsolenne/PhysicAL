<template>
  <div>

    <div id="img-background">
    </div>

    <header>
      <h1>Abonnement</h1>
      <h2>Bougez simplement</h2>
    </header>

    <main>
      <h2>Rejoignez <span class="title_underline">nous !</span></h2>
    <PresentationAbonnements/>


    <Detail_abonnement/>
      <Detail_abonnement/>


    </main>



    <footer>
      <FooterPage/>
    </footer>

  </div>
</template>

<script>
import FooterPage from "../components/FooterPage";
import Detail_abonnement from "../components/abonnement/Detail_abonnement.vue";
import PresentationAbonnements from "../components/accueil_visite/PresentationAbonnements";

export default {
  name: "Abonnement",
  components: {FooterPage, PresentationAbonnements, Detail_abonnement},
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
    margin: 60px auto;
    display: inline-block;

    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    text-align: center;


  }

}
</style>
