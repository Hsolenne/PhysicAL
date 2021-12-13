<template>
  <div>

    <div id="selection_presentation_activite_bg" v-show="visible">

    <div id="selection_presentation_activite" >


      <button id="close_login" @click="visible = false">X</button>


      <h4>{{ nom }}</h4>

      <p>{{ contenuLong }}</p>

      <div>
        <h5>Intensité</h5>
        <div class="list_point">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <button class="blue-button">
        Découvrir nos abonnements
      </button>

    </div>
  </div>

  </div>
</template>
<script>
export default {
  name: 'SelectionPresentationActivite',

  props: {
    visible:{},
    nom:{},
    intensite:{},
    contenuLong:{}
  }

}
</script>
<style lang="less" scoped>



#selection_presentation_activite_bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  background: #00000050;

  display: flex;
  justify-content: center;
  align-items: center;

}

#selection_presentation_activite {

  width: 50%;
  height: 80%;
  position: absolute;

  z-index: 900;

  border-radius: 30px;



  font-family: 'Urbanist', sans-serif;
  font-weight: lighter;
  font-size: 20px;
  color: var(--gray);


  background: white;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    margin: 0 auto;
    text-align: center;

  }

}

p {
  width: 50%;
  text-align: center;
  padding-bottom: 60px;

}

h4 {
  font-weight: normal;
  font-size: 24px;

  padding-bottom: 60px;
}

h5 {
  font-weight: lighter;
  font-size: 20px;
  text-decoration: underline;

}

.blue-button {
  width: auto;
}


div.list_point {
  display: flex;
  width: 110px;
  height: 20px;
  margin: 0 auto;
  padding: 20px 0;

  &  div {
    width: 18px;
    height: 18px;
    border: 1px solid var(--blue);

    background: var(--blue);
    border-radius: 20px;
    margin: 0 auto;
  }

  & div:nth-last-child(-n + 2) {
    background: white;
  }
}


</style>
