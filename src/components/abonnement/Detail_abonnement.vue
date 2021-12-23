<template>
  <div id="detail_abonnement">
    <section id="abonnement">

      <div id="elem">
        <Element_abonnement
            nom="Abonnement 1 sport au choix"
            prix="8 € / mois"
            lien=""/>
      </div>

      <div id="texte">
        <h2>Abonnement 1 sport au choix</h2>
        <h3 class="blue">Soit 2 € le cours de sport</h3>
        <h3 class="grey">Grâce à notre formule d'abonnement :</h3>

        <ul>
          <li>profitez d'un <span>accès illimité</span> à nos contenu en <span>replay</span> dans <span>{{  }}</span> ;
          </li>
          <li>un <span>libre accès</span> aux <span>lives</span> ;
          </li>
          <li>de nombreuses recettes et conseils en <span>nutrition</span>.</li>
        </ul>

        <button class="blue-button">Souscrire à l'abonnement</button>

      </div>
    </section>
    <section id="question">
      <div>
        <h2>Des <span class="title_underline">questions ?</span></h2>
        <ul>
          <li><h4>Y a t’il un engagement à l’abonnement ? </h4>
            <p>Il n’y a aucun engagement, on peut se désabonner à n’importe quel moment et le prélèvement est arrêté
              immédiatement.
            </p></li>


          <li>

            <h4>Si je ne peux pas me connecter à l’heure exacte du Live, comment je fais ?</h4>

            <p>Aucun problème, vous avez accès à tous les lives en rediffusion.
            </p></li>


          <li><h4>Comment résilier mon abonnement ?</h4>
            <p>L'abonnement est sans engagement, résiliable instantanément depuis
              menu > mon compte > abonnement</p>

          </li>

        </ul>
      </div>

    </section>

  </div>
</template>

<script>

import Element_abonnement from "./Element_abonnement";


export default {
  name: 'Detail_abonnement',

  components: {Element_abonnement}
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

}

</style>
