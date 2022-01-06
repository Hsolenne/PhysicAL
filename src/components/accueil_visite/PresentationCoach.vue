<template>
  <div>
    <section id="presentation_coach">


      <p>Je suis <span>Anne-Laure</span>, passionnée de danse depuis l'âge de 3 ans, je donne des cours de fitness
        depuis mes 20 ans,
        d'abord de façon bénévole puis de façon plus officielle depuis 2014 où j'ai passé le CQP en Animation de Loisirs
        Sportifs, ce qui m'a permis de faire de ma passion mon métier.

        Après avoir fait mes débuts en tant que prof de Zumba®, j'ai ensuite élargi mon activité en proposant des cours
        de Renforcement musculaire, de danse (enfant/adulte), de Piloxing®. Après avoir suivi plusieurs formations,
        notamment une formation Yoga en Inde à Rishikesh, j'ai aussi développé un cours mélangeant des techniques de
        <span>Stretching, Pilates et Yoga : le ZenFit</span>.
      </p>

      <div>
        <img src="../../assets/media/img_presentation_coach.png" alt="Photographie Anne-Laure Grandjean">
      </div>

    </section>
  </div>
</template>
<script>
export default {
  name: 'PresentationCoach'
}
</script>


<style lang="less" scoped>

@media (max-width: 1400px) {

  section#presentation_coach {
    flex-direction: column;
    & p {
      margin: 50px;
    }
  }
}

#presentation_coach {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 120px;
}

p {
  font-family: 'Urbanist', sans-serif;
  font-weight: lighter;
  display: block;
  text-decoration: none;
  font-size: 22px;
  width: 60%;

  @media (max-width: 420px) {
    width: 80%
  }

  & span {
    font-weight: bold;
  }
}

img {
  width: 350px;
  height: 364.5px;

  @media (max-width: 420px) {
    width: 280px;
    height: 291.5px;
  }
}

</style>
