<template>
  <div id="detail_abonnement">
    <section v-for="abonnement in Abonnement" :key="abonnement.id" id="abonnement">
      <div id="prix_abo">
        <div class="element_abonnement">
          <h3>{{abonnement.acf.type_sport}}</h3>
          <p class="description_abonnement">Choisissez le sport qui
            vous convient pour</p>
          <p class="prix_abonnement">
            {{abonnement.acf.prix}} € / mois</p>
          <p class="abonnement_commentaire">avec possibilité de résilier
            à tout moment</p>
          <button class="blue-button">
            Découvrir
          </button>
        </div>
      </div>
      <div id="texte">
        <h2> {{abonnement.acf.nom_abonnement}}</h2>
        <h3 class="blue">{{abonnement.acf.explication_remise}}</h3>
        <h3 class="grey">{{abonnement.acf.titre_de_la_description}}</h3>

        <ul>
          <li>{{abonnement.acf.description_1}}</li>
          <li>{{abonnement.acf.description_2}}</li>
          <li>{{abonnement.acf.description_3}}</li>
        </ul>

        <button class="blue-button">Souscrire à l'abonnement</button>
      </div>

    </section>
    <section id="question">
      <div>
        <h2>Les réponses à vos <span class="title_underline">questions</span></h2>
        <ul v-for="questionsReponses in QuestionsReponses" :key="questionsReponses.id" >
          <li>
            <h4>{{questionsReponses.acf.question}}</h4>
            <p>{{questionsReponses.acf.reponse}}</p>
          </li>


        </ul>
      </div>

    </section>

  </div>
</template>


<script>
import param from '@/param/param';
import axios from "axios";

export default {
  name: 'Detail_abonnement',
  data () {
    return {
      Abonnement:[],
      QuestionsReponses:[]
    }
  },
  created() {
    axios.get(param.host+"/abonnement")
        .then(response=>{
          console.log("ReponseSolenne",response);
          this.Abonnement = response.data;
          console.log("ReponseSolenne2",this.Abonnement);

        })
        .catch(error => console.log(error))
    axios.get(param.host+"/questions_reponses")
      .then(response=>{
        console.log("ReponseSolenne",response);
        this.QuestionsReponses = response.data;
        console.log("ResponsSolenne2",this.QuestionsReponses);
      })
  },

}
</script>


<style scoped lang="less">


#detail_abonnement {
  background: var(--light_gray);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & section {
    width: 90%;
    background: white;
    margin: 45px 0;
    padding: 20px;

    display: flex;
    justify-content: space-between;

    &#question {
      & div {
        width: 90%;
        margin: auto;
        & ul {
          margin-top: 40px;
        }
      }
    }

    &#abonnement {
      margin-bottom: 0;
      flex-wrap: wrap;

      & div#texte {
        margin: 0 auto;

        & span {
          font-weight: bolder;
        }
      }
    }
  }

  font-family: 'Urbanist', sans-serif;
  font-size: 20px;

  & h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  & h3 {
    margin-bottom: 45px;
  }

  & li {
    list-style-type: circle;
    margin-bottom: 20px;
  }

  & li::marker {
    color: var(--blue);
  }

  & button.blue-button {
    width: 250px;
  }

  & .blue {
    color: var(--blue);
    font-style: italic;
  }

  & .grey {
    color: var(--gray);
  }

  #texte {
    padding: 0 30px;
  }

#prix_abo {
  & div.element_abonnement {
    background-color: white;
    max-width: 280px;
    height: 390px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0 0 5px #00000050;
    margin: 0 10px;
    padding: 20px;
    font-family: 'Urbanist', sans-serif;

      @media (max-width: 920px) {
        align-items: center;
        margin-bottom: 30px;
      }

      @media (max-width: 410px) {
        max-width: 100%;
        width: 80%;
      }

    & h3 {
      font-size: 24px;
      font-weight: normal;
      font-family: 'Urbanist', sans-serif;
      text-align: center;
    }

    & p {
      display: block;
      text-align: center;
      max-width: 80%;
      margin: 0 auto;

      &.prix_abonnement {
        color: var(--blue);
        margin: 15px auto;
        font-size: 30px;
        font-weight: bold;
        font-family: 'Josefin Sans', sans-serif;
      }

      &.description_abonnement {
        font-weight: lighter;
        font-size: 18px;
      }

      &.abonnement_commentaire {
        font-weight: lighter;
        font-size: 14px;
        font-style: italic;
      }
    }

    .blue-button {
      margin: 0 auto;
    }
  }
}
}

</style>
