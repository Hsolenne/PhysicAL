<template>
  <div>
    <div class="element_abonnement">
      <h3>{{ nom }}</h3>
      <p class="description_abonnement">Choisissez le sport qui
        vous convient pour</p>
      <p class="prix_abonnement">
        {{ prix }}
      </p>
      <p class="abonnement_commentaire">avec possibilité de résilier
        à tout moment</p>
      <button class="blue-button">
        Découvrir
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Element_Abonnement',
  props: ['nom', "prix", "lien"]


}
</script>

<style scoped lang="less">

div.element_abonnement {
  background-color: white;
  max-width: 280px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0 0 5px #00000050;
margin: 0 10px;
  font-family: 'Urbanist', sans-serif;



  & h3 {

    font-size: 24px;
    font-weight: normal;
    font-family: 'Urbanist', sans-serif;
    text-align: center;
  }

  & p {

    display: block;
    text-align: center;
    max-width: 80%;
    margin: 0 auto;

    &.prix_abonnement {
      color: var(--blue);
      margin: 35px auto;
      font-size: 30px;
      font-weight: bold;
      font-family: 'Josefin Sans', sans-serif;

    }

    &.description_abonnement {
      font-weight: lighter;
      font-size: 18px;
    }


    &.abonnement_commentaire {
      font-weight: lighter;
      font-size: 14px;
      font-style: italic;
    }


  }

  .blue-button {
    margin: 0 auto;
  }

}


</style>
