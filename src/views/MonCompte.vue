<template>
  <div id="inscrition">

    <main>


      <div id="white_bg">
        <h2><span className="title_underline">Mon compte</span></h2>


        <form action="" method="get">
          <div id="form_part_1">
            <div>
              <p>name_user</p>
            </div>

            <div>
              <p>surname_user</p>
            </div>

            <div>
              <p id="email_user"> email_user </p>
            </div>

            <div>
              <p>birthday_user</p>
            </div>

            <div>
              <p>number_user</p>
            </div>

            <div>
              <p>city_user</p>
            </div>

            <div>
              <p>postal_code_user</p>
            </div>
          </div>


          <section id="submit_button">

            <button class="blue-button">
              <router-link to="/moncomptemodif"> Modifier les données</router-link>
            </button>

            <button class="blue-button">

              <router-link to="/moncomptemdp"> Modifier le mot de passe</router-link>

            </button>


          </section>
        </form>


        <div id="array_abonnement">

          <h4 id="produit_title">Produit</h4>
          <h4 id="prix_title">Prix</h4>
          <h4 id="quantite_title">Quantité</h4>
          <h4 class="soustotal_title">Sous-total</h4>

          <p id="produit">Abonnement 1 mois 1 sport</p>
          <p id="prix">8.00€</p>
          <p id="quantite">1</p>
          <p class="soustotal">8.00€</p>

        </div>

        <button class="blue-button">
          <router-link to="/"> Résilier l'abonnement</router-link>
        </button>

      </div>
    </main>

    <footer>
      <FooterPage/>
    </footer>


  </div>
</template>

<script>
import FooterPage from "../components/FooterPage";


export default {
  name: "MonCompte",
  components: {FooterPage},


}
</script>


<style scoped lang="less">

#inscrition {
  font-size: 20px;
}

main {
  margin-top: 50px;
  width: 100%;
  background: var(--light_gray);

  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-size: 40px;
    margin: 60px auto;
    display: inline-block;

    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    text-align: center;
  }

  & button {
    width: 200px;
    margin: 20px 10px;
  }
}

#white_bg {
  margin: 25px;
  padding: 25px;

  width: calc(100% - 100px);
  width: -webkit-fill-available;

  background: white;
}

form {
  & div > div {
    min-width: calc(50% - 57px);
    height: 40px;
    margin-right: 55px;
    margin-bottom: 20px;
    position: relative;
    border: 1px solid var(--gray);

    @media (max-width: 860px) {
      width: 100%;
      min-width: 100%;
    }

    & > p {
      width: 100%;
      margin: 10px;
    }
  }

  #form_part_1, #form_part_2 {
    display: flex;
    flex-wrap: wrap;
  }
}

p#champsobligatoire {
  position: relative;
  display: block;
  width: max-content;
  margin-left: 20px;
  font-family: Urbanist, sans-serif;
  font-weight: lighter;
  font-size: 20px;
}

#submit_button {
  display: flex;

  flex-wrap: wrap;

  justify-content: center;
  padding: 20px 0;

  & * {
    margin: 10px;
  }
}

#array_abonnement {

  border: 1px var(--gray) solid;

  padding: 10px;

  width: calc(100% - 20px);
  width: -webkit-fill-available;

  margin: 30px 0;

  display: grid;
  grid-template-columns: repeat(2, 2fr) repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;

  & #produit_title {
    grid-area: 1 / 1 / 2 / 2;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 2;
  }

  & #produit {
    grid-area: 2 / 1 / 3 / 2;
    grid-row-start: 2;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-column-end: 2;
  }

  & #prix_title {
    grid-area: 1 / 2 / 2 / 3;
    grid-row-start: 1;
    grid-column-start: 2;
    grid-row-end: 2;
    grid-column-end: 3;
  }

  & #prix {
    grid-area: 2 / 2 / 3 / 3;
    grid-row-start: 2;
    grid-column-start: 2;
    grid-row-end: 3;
    grid-column-end: 3;
  }

  & #quantite_title {
    grid-area: 1 / 3 / 2 / 4;
    grid-row-start: 1;
    grid-column-start: 3;
    grid-row-end: 2;
    grid-column-end: 4;
  }

  & #quantite {
    grid-area: 2 / 3 / 3 / 4;
    grid-row-start: 2;
    grid-column-start: 3;
    grid-row-end: 3;
    grid-column-end: 4;
  }

  & .soustotal_title {
    grid-area: 1 / 4 / 2 / 5;
    grid-row-start: 1;
    grid-column-start: 4;
    grid-row-end: 2;
    grid-column-end: 5;
  }

  & .soustotal {
    grid-area: 2 / 4 / 3 / 5;
    grid-row-start: 2;
    grid-column-start: 4;
    grid-row-end: 3;
    grid-column-end: 5;
  }

  & > * {
    text-align: center;

    width: 100%;
    height: 100%;
  }
}

</style>
