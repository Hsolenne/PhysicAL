<template>
  <div id="inscrition_step3">

    <main>


      <div id="white_bg">
        <h2><span class="title_underline">Facturation</span></h2>

        <p>Merci pour votre inscription, veuillez vérifier le type d'abonnement choisi :</p>

        <form action="" method="get">
          <div id="form_part_1">
            <div>
              <input type="text" placeholder="Prénom" name="name_user" id="name_user" required>
            </div>

            <div>
              <input type="text" placeholder="Nom" name="surname_user" id="surname_user" required>
            </div>

            <div>
              <input type="email" placeholder="E-Mail" name="email_user" id="email_user" required>
            </div>

            <div>
              <input type="date" placeholder="Date de naissance" name="birthday_user" id="birthday_user" required>
            </div>

            <div>
              <input type="tel" placeholder="Numéro de téléphone" name="number_user" id="number_user" required>
            </div>

            <div>
              <input type="text" placeholder="Ville" name="city_user" id="city_user" required>
            </div>

            <div>
              <input type="number" placeholder="Code postal" name="city_user" id="postal_code_user" required>
            </div>
          </div>

         <!-- <div id="form_part_2">


            <div>
              <input type="password" placeholder="Mot de passe" name="password_user" id="password_user" required>
            </div>

            <div>
              <input type="password" placeholder="Répétez le mot de passe" name="re_password_user" id="re_password_user"
                     required>
            </div>
          </div>-->

          <p id="champsobligatoire">Champs obligatoires.</p>

          <div id="valider_commande">
            <h4 id="title_panier">Total Commande</h4>
            <h4 class="soustotal_title">Sous-total</h4>
            <p class="soustotal">8.00€</p>
            <h4 id="total_title">Total</h4>
            <p id="total">8.00€</p>
          </div>

            <div id="array_commande">
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
            <button class="blue-button">
              <router-link to="/sinscrire3"> Valider  </router-link>
            </button>


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
  name: "SInscrireStep3x",
  components: {FooterPage},

}
</script>


<style scoped lang="less">

#inscrition_step3 {
  font-family: Urbanist, sans-serif;
  font-weight: lighter;
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

    @media (max-width: 860px) {
      width: 100%;
      min-width: 100%;
    }

    &:after {
      content: "*";
      font-family: Urbanist, sans-serif;
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

#submit_button {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0;

  & > * {
    margin: 10px;
  }
}

#array_commande {

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

#valider_commande {
  border: 1px var(--gray) solid;

  width: 33.33%;
  margin: 30px 0;

  @media (max-width: 950px) {
    width: 100%;
  }

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

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

@media (max-width: 820px) {

  #array_commande {

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
        grid-row-start:1 ;
        grid-column-start: 2;
        grid-row-end:2 ;
        grid-column-end:3;
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
        grid-row-start:2 ;
        grid-column-start:2 ;
        grid-row-end: 3;
        grid-column-end: 3;
      }

      #quantite_title {
        grid-area: 3 / 1 / 4 / 2;
        grid-row-start:3 ;
        grid-column-start:1 ;
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

#array_commande, #valider_commande {
  font-family: 'Urbanist', sans-serif;
  font-size: 20px;
}

</style>
