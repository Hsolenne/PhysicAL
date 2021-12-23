<template>
  <div>
    <div id="section_activite">

      <img :src="lienimg" alt="">

      <h4>{{ nom }}</h4>

      <p>{{ contenuCourt }}</p>

      <div>
        <h5>Intensité</h5>
        <div class="list_point">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <button class="blue-button"
              @click="$refs.selection_activite.visible=true"
      >
        Voir +
      </button>

    </div>

    <SelectionPresentationActivite
        :visible="visible"
        :contenuLong="contenuLong"
        :nom="nom"
        ref="selection_activite"
    />

  </div>
</template>
<script>

import SelectionPresentationActivite from "./SelectionPresentationActivite";

export default {
  name: 'PresentationActivite',

  components: {SelectionPresentationActivite},


  props: ['nom','contenuCourt','contenuLong','intensite','lienimg'],

  data: function (){
    return {
      visible: false,
    }
  }

}


</script>
<style lang="less" scoped>


#section_activite {

  margin: 0 20px 100px 20px;
  padding-bottom: 30px;


  font-family: 'Urbanist', sans-serif;
  font-weight: lighter;
  font-size: 20px;
  color: var(--gray);


  background: white;
  box-shadow: 0 0 5px #00000060;
  width: 424px;


  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    margin: 0 auto;
    text-align: center;

  }

}

img {
  height: 210px;
  width: auto;
  margin: 10px 0;
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

button {
  width: 100px;
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




}





</style>

<style lang="less">

.intensite1 div.list_point {
  & div:nth-last-child(-n + 3) {
    background: white;
  }
}

.intensite2 div.list_point {
  & div:nth-last-child(-n + 2) {
    background: white;
  }
}
.intensite3 div.list_point {
  & div:nth-last-child(-n + 1) {
    background: white;
  }
}
.intensite4 div.list_point {
  & div:nth-last-child(-n + 0) {
    background: white;
  }
}


</style>
