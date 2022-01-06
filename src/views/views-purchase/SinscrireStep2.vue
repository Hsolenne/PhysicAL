<template>
  <div id="inscrition_step2">

    <main>


      <div id="white_bg">
        <h2><span class="title_underline">Choix de l'abonnement</span></h2>

        <p>Merci pour votre inscription, veuillez vérifier le type d'abonnement choisi :</p>

        <form action="" method="get">

          <p id="champsobligatoire">Champs obligatoires.</p>

          <div>

            <div>
              <input type="text" placeholder="BASE DE DONNEES ICI">
            </div>
          </div>

          <div id="valider_abonnement">

            <h4 id="title_panier">Total Panier</h4>
            <h4 class="soustotal_title">Sous-total</h4>
            <p class="soustotal">8.00€</p>
            <h4 id="total_title">Total</h4>
            <p id="total">8.00€</p>

            <div id="valider_button">

              <button class="blue-button" id="btn_valider_abonnement">
                <router-link to="/sinscrire3"> Valider </router-link>
              </button>

            </div>

          </div>



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

          <section id="submit_button">
            <button class="blue-button">Déjà client ? Connectez-vous</button>

            <div>

              <button class="blue-button">
                <router-link to="/sinscrire3"> Valider </router-link>
              </button>

            </div>
          </section>
        </form>

      </div>
    </main>

    <footer>
      <FooterPage/>
    </footer>


  </div>
</template>

<script>
import FooterPage from "../../components/FooterPage";


export default {
  name: "SInscrireStep2",
  components: {FooterPage},

}

</script>


<style scoped lang="less">

#btn_valider_abonnement {
  margin: 0;
}

#inscrition_step2 {
  font-family: Urbanist, sans-serif;
  font-weight: lighter;
  font-size: 20px;
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

#valider_abonnement {
  border: 1px var(--gray) solid;

  width: 33.33%;
  margin: 30px 0;

  @media (max-width: 950px) {
    width: 100%;
  }

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;

  & > * {
    text-align: center;

    width: 100%;
    height: 100%;

    margin: 10px;
  }
}

#title_panier {
  grid-area: 1 / 1 / 2 / 3;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 3;
}

.soustotal_title {
  grid-area: 2 / 1 / 3 / 2;
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 2;
}

.soustotal {
  grid-area: 2 / 2 / 3 / 3;
  grid-row-start: 2;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-column-end: 3;
}

#total_title {
  grid-area: 3 / 1 / 4 / 2;
  grid-row-start: 3;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 2;
}

#total {
  grid-area: 3 / 2 / 4 / 3;
  grid-row-start: 3;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-column-end: 3;
}

#valider_button {
  grid-area: 4 / 1 / 5 / 3;
  grid-row-start: 4;
  grid-column-start: 1;
  grid-row-end: 5;
  grid-column-end: 3;
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
    margin: 50px 10px;
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
    min-width: calc(50% - 55px);
    height: 42px;
    margin-right: 55px;
    margin-bottom: 20px;
    position: relative;

    &:after {
      content: "*";
      font-family: Urbanist,sans-serif;
      color: var(--blue);
      font-size: 40px;
      font-weight: bold;
      position: absolute;
      top: calc(50% - (40px * 0.35));
      right: -20px;
    }

    & > input {
      width: 100%;
      height: 100%;
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

  &:before {
    content: "*";
    font-family: Urbanist, sans-serif;
    color: var(--blue);
    font-size: 40px;
    font-weight: bold;
    position: absolute;
    top: calc(50% - (20px * 0.8));
    left: -20px;
  }
}

.blue-button {
  margin: 0;
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

& > * {
  margin: 0 10px;
}

@media (max-width: 820px) {

  #array_abonnement {

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);

    & {
      #prix_title {
        grid-area: 1 / 1 / 2 / 2;
        grid-row-start: 1;
        grid-column-start: 1;
        grid-row-end: 2;
        grid-column-end: 2;
      }

      #produit {
        grid-area: 1 / 2 / 2 / 3;
        grid-row-start: 1;
        grid-column-start: 2;
        grid-row-end: 2;
        grid-column-end: 3;
      }

      #prix_title {
        grid-area: 2 / 1 / 3 / 2;
        grid-row-start: 2;
        grid-column-start: 1;
        grid-row-end: 3;
        grid-column-end: 2;
      }

      #prix {
        grid-area: 2 / 2 / 3 / 3;
        grid-row-start: 2;
        grid-column-start: 2;
        grid-row-end: 3;
        grid-column-end: 3;
      }

      #quantite_title {
        grid-area: 3 / 1 / 4 / 2;
        grid-row-start: 3;
        grid-column-start: 1;
        grid-row-end: 4;
        grid-column-end: 2;
      }

      #quantite {
        grid-area: 3 / 2 / 4 / 3;
        grid-row-start: 3;
        grid-column-start: 2;
        grid-row-end: 4;
        grid-column-end: 3;
      }

      .soustotal_title {
        grid-area: 4 / 1 / 5 / 2;
        grid-row-start: 4;
        grid-column-start: 1;
        grid-row-end: 5;
        grid-column-end: 2;
      }

      .soustotal {
        grid-area: 4 / 2 / 5 / 3;
        grid-row-start: 4;
        grid-column-start: 2;
        grid-row-end: 5;
        grid-column-end: 3;
      }
    }
  }
}

</style>
