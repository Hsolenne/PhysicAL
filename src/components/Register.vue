<template>
  <div>
    <div id="register_window_background" v-show="visible">
      <div id="register_window">

        <button id="close_register" @click="visible = false">X</button>

        <h3>S'Inscrire</h3>
        <p>Pour s'inscrire et profiter du contenu premium, souscrivez à l'
          <router-link to="/abonnement">un abonnement</router-link>
          de votre choix.
        </p>

        <div>
          <button class="blue-button">Déjà client ? Connectez-vous</button>
          <button class="blue-button">          <router-link to="/abonnement">Choisir un abonnement</router-link>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Register',

  props: {
    visible: {},
  }

}
</script>

<style scoped lang="less">

#register_window_background {
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

#register_window {
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

  & p {
    display: inline-block;
  }

  & p {
    font-weight: normal;
    font-size: 20px;
    max-width: 568px;
    text-align: center;

    margin-bottom: 70px;

    & > a {
      color: var(--blue);
      font-weight: bold;
    }
  }


  & button.blue-button {
    width: 200px;
    margin: 50px  10px;


    & > a {
      color: white;
      font-weight: normal;
      text-decoration: none;
    }
  }

  button#close_register {
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
