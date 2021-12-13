<template>
  <div>



    <PresentationAbonnements/>

    <FooterPage/>

  </div>
</template>

<script>
import FooterPage from "../components/FooterPage";
import PresentationAbonnements from "../components/accueil_visite/PresentationAbonnements";

export default {
  name: "Abonnement",
  components: {FooterPage, PresentationAbonnements},
}
</script>

<style scoped>

</style>
