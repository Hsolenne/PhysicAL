<template>
  <div id="app">
      <div>
        <nav>
          <div id="menu-contener" class="closed">


            <ul>

              <div id="logo_and_button">
                <router-link id="logo" to="/"  onclick="this.parentNode.parentNode.parentNode.classList.add('closed')">LOGO</router-link>
                <div id="menu-button" onclick="this.parentNode.parentNode.parentNode.classList.toggle('closed')">
                  <div class="menu_button_bar"></div>
                  <div class="menu_button_bar"></div>
                  <div class="menu_button_bar"></div>
                </div>
              </div>

              <router-link to="/" onclick="this.parentNode.parentNode.classList.add('closed')">Accueil</router-link>

              <router-link to="/abonnement" v-show="true" onclick="this.parentNode.parentNode.classList.add('closed')">Abonnement</router-link>
              <router-link to="/mescours" v-show="true" onclick="this.parentNode.parentNode.classList.add('closed')">Mes Cours</router-link>

              <router-link to="/nutrition" onclick="this.parentNode.parentNode.classList.add('closed')">Nutrition</router-link>

              <router-link to="/moncompte" v-show="true" onclick="this.parentNode.parentNode.classList.add('closed')">Mon compte</router-link>
              <router-link to="/contact" v-show="true" onclick="this.parentNode.parentNode.classList.add('closed')">Contact</router-link>

              <router-link to="/sinscrire" v-show="true" onclick="this.parentNode.parentNode.classList.add('closed')">S'inscrire</router-link>


              <a @click="$refs.login.visible=true">{{titre}}</a>


            </ul>
          </div>
        </nav>


        <Register :visible="visible" ref="register"/>

        <Login :visible="visible" ref="login"/>

      </div>
    <router-view/>

  </div>
</template>

<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import param from "./param/param.js";

export default {
  name: 'App',
  components: {Login,Register},
    data: function () {
      return {
        visible: false,
        }
    },
    created() {
      this.titre = param.titre;
    },
  }


</script>


<style scoped lang="less">

* {
  margin: 0;
  padding: 0;
}

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
    & ul {
      background-image: url("./assets/content/fils-menu.png");
      background-position: right bottom;
      background-repeat: no-repeat;
      background-size: 50%;
    }

    &.closed {
      height: 50px;

      & ul {
        background: white;

        & > a {
          display: none;
        }
      }
    }
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
      background-image: url("./assets/content/LOGO_2.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      height: 35px;
      width: 102.15px;

      text-indent: -9999px;

      @media (max-width: 1320px) {
        background-image: url("./assets/content/LOGO_1.svg");
        height: 35px;
        width: 35px;
        margin: 7.5px 0 100px 0;
      }
    }

    &:nth-last-child(-n + 3), &:first-child {
      border: none;
    }

    &:nth-last-child(2) {
      border: none;
      color: var(--blue);
    }

    &:last-child {
      display: block;

      margin: auto 15px;
      background: var(--blue);
      padding: 5px 15px;
      border-radius: 15px;
      border: 1px solid var(--blue);
      max-width: 100px;

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

  #logo_and_button {
    display: flex;

    & #menu-button {
      padding: 0 45px;
      margin: 7.5px 0 100px 0;
    }
  }

</style>
