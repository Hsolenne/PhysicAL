<template>
  <div>
    <div id="login_window_background" v-show="visible">
      <div  id="login_window">

        <button id="close_login" @click="visible = false">X</button>

        <h3>Connexion</h3>
        <p>Connectez-vous pour accéder au contenu premium ou choisissez

          <router-link to="/abonnement">un abonnement</router-link>

          .</p>

        <form action="" method="get">

          <div>
            <input type="text" placeholder="Adresse E-mail" name="identifiant" id="id_login" required
            v-model="utilisateur.identifiant">
          </div>
          <div>
            <input type="password" placeholder="Mot de passe" name="password" id="pswd_login" required
            v-model="utilisateur.mot_de_passe">
          </div>
          <div>
            <button type="button" id="login_submit" class="blue-button"
                    @click='connect'>Connexion</button>
          </div>
        </form>

      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import param from "../param/param.js";

export default {
  name: 'Login',

  props: {
    visible:{},
  },
  data() {
    return {
      utilisateur: {
        identifiant: null,
        mot_de_passe: null,
      },
      titre: null,
    }
  },
      created() {
        this.titre=param.titre
      },
      methods: {
        connect: function () {
          let params = new FormData();
          params.append('username', this.utilisateur.identifiant);
          params.append('password', this.utilisateur.mot_de_passe);

          axios({
            method:'post',
            url:param.auth + 'token',
            data:params
          })
              .then(function(response) {
                alert("Vous êtes connectés");
                console.log("Reponse token", response);
                this.utilisateur = response.data;
                console.log("utilisateur", response.data);
                this.titre = "Deconnexion";

              }.bind(this))

        }
      }
}
</script>

<style scoped lang="less">

#login_window_background {
  width: 100vw;
  height: 100vh;
  background: #00000060;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;


  display: flex;
  align-items: center;
  justify-content: center;
}

#login_window {
  font-family: 'Urbanist', sans-serif;
  font-weight: lighter;
  color: var(--gray);
  background: white;

  width: 800px;
  height: 570px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 0 10px #00000060;

  & h3 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    font-size: 40px;
    display: block;
    margin: 25px 0;
  }

  & a,p {
    display: inline-block;
  }

  & p {
    font-weight: normal;
    font-size: 20px;
    max-width: 568px;
    text-align: center;

    margin-bottom: 70px;

    &>a {
      color: var(--blue);
      font-weight: bold;
    }
  }

  & form {
    width: 100%;
    text-align: center;

    & input#id_login, input#pswd_login {
      max-width: 536px;

      width: 100%;
      height: 42px;
      font-size: 20px;

      margin-bottom: 20px;

      border-radius: 0;
      color: var(--gray);
    }
  }

  button#close_login {
    height: 20px;
    width: 20px;

    align-self: flex-end;
    font-size: 24px;
    font-weight: bold;
    border: none;
    background: none;

    &:hover {
      font-weight: bolder;

    }
  }
}

</style>
