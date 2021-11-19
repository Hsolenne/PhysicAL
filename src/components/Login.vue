<template>
  <div>
    <div id="login_window_background"  v-show="visible">
      <div  id="login_window">

        <button id="close_login" @click="visible = false">X</button>

        <h3>Se connecter</h3>
        <p>Connectez-vous pour accéder au contenu premium ou choisissez

          <router-link to="/abonnement">un abonnement</router-link>

          .</p>

        <form action="" method="get">

          <div>
            <input type="text" placeholder="Identifiant ou Adresse E-mail" name="identifiant" id="id_login" required>
          </div>
          <div>
            <input type="password" placeholder="Mot de passe" name="password" id="pswd_login" required>
          </div>
          <div>
            <input type="submit" id="login_submit" class="blue-button" value="Se connecter">
          </div>
        </form>

        <router-view/>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',

  props: {
    visible:{},
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
