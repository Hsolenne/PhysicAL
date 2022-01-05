<template>
  <div>
    <div id="mon_activite">

      <img :src="lienimg" alt="Image représentant le sport">

      <h4>{{ nom }}</h4>


      <button class="blue-button">
        <router-link to="/nutrition">        Go !
        </router-link>
      </button>

    </div>


  </div>
</template>
<script>


export default {
  name: 'MesActivites',

  components: {},


  props: ['nom','lienimg','lienactivite'],

  data: function (){
    return {
      visible: false,
    }
  }

}


</script>
<style lang="less" scoped>


#mon_activite {



  font-family: 'Urbanist', sans-serif;
  font-weight: lighter;
  font-size: 20px;
  color: var(--gray);


  background: white;
  box-shadow: 0 0 5px #00000060;
  width: 424px;


  display: flex;
  flex-direction: column;

  & > * {
    margin: 0 auto;
    text-align: center;

  }

  & button {
    width: 100px;
    margin-bottom: 20px;
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





</style>
