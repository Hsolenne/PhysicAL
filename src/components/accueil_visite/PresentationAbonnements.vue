<template>
  <div>
    <section id="Presentationabonnement">
      <p>Unique condition : avoir / créer un compte Facebook</p>
      <div id="liste_abonnements">

        <Element_abonnement
            nom="Abonnement 1 sport au choix"
            prix="8 € / mois"
            lien=""/>
        <Element_abonnement
            nom="Abonnement tous les sports"
            prix="15 € / mois"
            lien=""/>

      </div>

    </section>
  </div>
</template>
<script>

import Element_abonnement from "../abonnement/Element_abonnement.vue";

export default {
  name: 'PresentationAbonnement',
  components: {Element_abonnement},
}
</script>
<style lang="less" scoped>

#Presentationabonnement {
  width: 100%;
  background: var(--light_gray);
  padding: 20px 0;
  text-align: center;
  font-family: 'Urbanist', sans-serif;


  & > p {

    font-weight: lighter;
    display: block;
    font-size: 14px;
    margin-bottom: 15px;
  }
}

#liste_abonnements {
  display: flex;
  margin: auto;
  justify-content: center;
}



</style>
