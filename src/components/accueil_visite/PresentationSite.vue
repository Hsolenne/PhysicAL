<template>
  <div id="presentation_du_site">
    <section>
      <p>Des cours de sports à la maison pour tous à des prix minis avec :</p>
      <ul>
        <li>
          <p>Des vidéos en direct</p>
        </li>
        <li>
          <p>Des replays</p>
        </li>
        <li>
          <p>Une diversité de sports proposés à différentes intensités</p>
        </li>
        <li>
          <p>Une rubrique nutrition</p>
        </li>
        <li>
          <p>Accesssible sur tous les supports</p>
        </li>
      </ul>

      <div></div>
      <div></div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'PresentationSite'
}
</script>
<style lang="less" scoped>


#presentation_du_site {
  align-self: center;
  padding: 0 40px;
  margin-bottom: 60px;

  font-family: 'Urbanist', sans-serif;
  font-weight: lighter;
  font-size: 20px;

  & section > p {
    margin-bottom: 25px;
  }

  & ul {
    width: calc(100% - 2*50px);
    padding: 0 50px;
  }

  & li {
    list-style-type: circle;
    margin-bottom: 20px;
  }
  & li::marker {
    color: var(--blue);
  }
}

</style>
