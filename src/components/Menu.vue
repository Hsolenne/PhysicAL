<!--<template>
  <div>
    <nav>
      <div id="menu-contener">


        <ul>

          <router-link id="logo" to="/">LOGO</router-link>


          <router-link to="/">Accueil</router-link>

          <router-link to="/abonnement" v-show="true">Abonnement</router-link>
          <router-link to="/mescours" v-show="true">Mes Cours</router-link>

          <router-link to="/nutrition">Nutrition</router-link>

          <router-link to="/moncompte" v-show="true">Mon compte</router-link>
          <router-link to="/contact" v-show="true">Contact</router-link>

          <router-link to="/sinscrire" v-show="true">S'inscrire</router-link>

          <a @click="$refs.register.visible=true">S'inscrire</a>

          <a @click="$refs.login.visible=true">{{titre}}</a>


        </ul>

        <div id="menu-button">
          <div class="menu_button_bar"></div>
          <div class="menu_button_bar"></div>
          <div class="menu_button_bar"></div>
        </div>


      </div>
      <router-view/>
    </nav>


    <Register :visible="visible" ref="register"/>

    <Login :visible="visible" ref="login"/>

  </div>
</template>

<script>

import Login from "./Login";
import Register from "./Register";
import param from "../param/param.js";

export default {
  name: 'Menu',
  components: {Login,Register},

  data: function () {
    return {
      visible: false,
    }
  },
created() {
    this.titre = param.titre;

}
}


</script>

<style scoped lang="less">

#menu-contener {

  z-index: 10;

  font-family: 'Urbanist', sans-serif;
  font-weight: lighter;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;


  @media (max-width: 1320px) {
    height: 100vh;
  }

  background: white;
  box-shadow: 0 0 10px #00000060;

  display: flex;
  justify-content: center;
  align-content: center;


  & div#menu-button {
    display: none;
    width: 30px;
    height: 25px;

    & div.menu_button_bar {
      background-color: var(--blue);
      width: 100%;
      height: 5px;
      border-radius: 10px;
    }

    @media (max-width: 1320px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }


  & ul {
    max-width: 1320px;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-content: center;


    @media (max-width: 1320px) {
      display: block;

    }

  }


  & a {
    display: block;

    padding: 0 30px;
    margin: auto 0;

    border-right: 1px solid var(--gray);


    @media (max-width: 1320px) {
      border: none;
      margin-bottom: 30px;

    }

    text-decoration: none;
    color: var(--gray);


    &:first-child {
      background-image: url("../assets/content/LOGO_2.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      height: 35px;
      width: 102.15px ;

      text-indent: -9999px;

      @media (max-width: 1320px) {
        background-image: url("../assets/content/LOGO_1.svg");
        height: 35px;
        width: 35px;
        margin: 15px 0 100px 0;


      }


    }


    &:nth-last-child(-n + 3), &:first-child {
      border: none;

    }


    &:nth-last-child(2) {
      border: none;
      color: var(--blue);

      @media (max-width: 1320px){
        margin-top: 150px;
      }

    }

    &:last-child {
      display: block;

      margin: auto 15px;
      background: var(--blue);
      padding: 5px 15px;
      border-radius: 15px;
      border: 1px solid var(--blue);

      color: white;


    }

    &:last-child:hover {
      background: none;
      color: var(--blue);

    }


    &:hover {
      text-decoration: underline;
    }




    @media (max-width: 1320px) {
      &:nth-child(1+n) {
        display: none;

      }
    }


  }


  & #logo {
    margin-right: auto;

  }

}
</style>
