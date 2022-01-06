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

          <div id="form_part_2">


            <div>
              <input type="password" placeholder="Mot de passe" name="password_user" id="password_user" required>
            </div>

            <div>
              <input type="password" placeholder="Répétez le mot de passe" name="re_password_user" id="re_password_user"
                     required>
            </div>
          </div>

          <p id="champsobligatoire">Champs obligatoires.</p>

          <section id="submit_button">
            <button class="blue-button">Déjà client ? Connectez-vous</button>


            <div>
              <!--            <input type="submit" id="register_user" class="blue-button" value="Valider l'inscription">-->
              <router-link to="/sinscrire2"> INSCIPTION  </router-link>

            </div>
          </section>
        </form>


        <div id="valider_commande">

          <h4 id="title_valider_commande">Votre commande</h4>

          <h4 id="produit_title">Produit</h4>
          <h4 id="prix_title">Prix</h4>
          <h4 id="quantite_title">Quantité</h4>
          <h4 class="soustotal_title">Sous-total</h4>
          <p class="soustotal">8.00€</p>
          <h4 id="total_title">Total</h4>
          <p id="total">8.00€</p>

        </div>
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

#inscrition_step2 {
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

  & * {
    margin: 10px;
  }
}

</style>
