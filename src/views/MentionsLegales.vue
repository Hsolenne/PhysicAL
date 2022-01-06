<template>
  <div>

    <div id="img-background">
    </div>


    <header>
      <h1>Mentions légales</h1>
      <h2>Bougez simplement</h2>
    </header>

    <main>
      <h2>Mentions <span class="title_underline">légales</span></h2>


      <div class="white_bg">
        <p>Cette page décrit les mentions légales qui s'appliquent à tout internaute visitant ce site. En le consultant
          vous vous engagez sans réserve à les respecter. Les mentions légales pouvant être modifiées à tout moment et
          sans préavis, nous vous engageons à les consulter régulièrement.</p>
        <h3>Responsable éditorial et responsable légal</h3>
        <ul style="list-style-type: none">
          <li><strong>Nom de la structure :</strong> Physic’AL</li>
          <li><strong>Représenté(e) par :</strong> Anne-laure GRANDJEAN</li>
          <li><strong>Adresse :</strong> 34 rue du général courtot, 90700 Châtenois-les-Forges</li>
          <li><strong>Tél. :</strong> +33 (0) 6 86 62 07 15</li>
          <li><strong>E-mail :</strong> physic.al@yahoo.com</li>
          <li><strong>Siret / N°TVA :</strong> 81213625700019</li>
        </ul>
        <h3>Éditeur du site</h3>
        <ul style="list-style-type: none">
          <li><strong>Infrastructure</strong>IUT de Belfort-Montbéliard, département Métiers du Multimédia et de
            l’Internet
          </li>
          <li><strong>Représenté par les étudiants :</strong> Solenne Heitz, Gabriel Scribot et Pacôme Vouriot-Thuzet
          </li>
          <li><strong>Adresse :</strong> 4 Place Tharradin, 25200 Montbéliard</li>
          <li><strong>E-mail :</strong> solheitz@gmail.com</li>
          <li><strong>Tuteur légal des étudiants :</strong> Julien Henriet</li>
        </ul>
        <h3>Hébergeur</h3>
        <ul style="list-style-type: none">
          <li>Infomaniak</li>
          <li><strong>Représenté par :</strong> Marc Oehler</li>
          <li><strong>Adresse :</strong> Rue Eugène-Marziano 25, 1227 Les Acacias, Suisse</li>
        </ul>
        <h3>Conditions d’utilisation :</h3>
        <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès et de
          rectification aux données vous concernant par simple demande mail, écrite ou téléphonique. L-IUT de
          Belfort-Montbéliard et les étudiants (Solenne Heitz, Gabriel Scribot et Pacôme Vouriot-Thuzet) ne peuvent être
          tenus responsable du contenu du site. Ce site est exploité par Physic’AL. La présentation et chacun des
          éléments, y compris les marques, logos et noms de domaine, apparaissant sur le site
          http://www.projets3.hsolenne.fr sont protégés par les lois en vigueur sur la propriété intellectuelle, et
          appartiennent à Physic’AL, ou font l'objet d'une autorisation d'utilisation. Aucun élément composant le site
          ne peut être copié, reproduit, modifié, réédité, chargé, dénaturé, transmis ou distribué de quelque manière
          que ce soit, sous quelque support que ce soit, de façon partielle ou intégrale, sans l'autorisation écrite et
          préalable de Physic’AL à l'exception d'une stricte utilisation pour les besoins de la presse et sous réserve
          du respect des droits de propriété intellectuelle et de tout autre droit de propriété dont il est fait
          mention. Seule la copie à usage privé est autorisée pour votre usage personnel, privé et non-commercial, sur
          votre ordinateur personnel. Toute utilisation autorisée des éléments composant ou figurant dans le site doit
          se faire sans dénaturation, modification ou altération de quelque manière que ce soit. Physic’AL se réserve le
          droit de poursuivre tout acte de contrefaçon de ses droits de propriété intellectuelle. Le présent Contrat est
          soumis au droit Français. Le présent Contrat s'applique dans le monde entier, et seule sa version en langue
          française fait foi en vue de son interprétation.</p>
        <h3>Graphisme, photos et illustrations :</h3>
        <p>Le graphisme (incluant le webdesign et le logo) a été réalisé par Pacôme VOURIOT-THUZET et Solenne
          HEITZ.</p>
        <p>Les photographies ont été réalisé par Joris LIN. Les illustrations et visuels ont été téléchargés sur les
          banques d’images libres de droits Pexels, Pixabay, Unsplash, Flaticon etc.
        </p>
        <h3>Déclaration à la CNIL :</h3>
        <p>Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la
          protection des personnes physiques à l’égard des traitements de données à caractère personnel) relative à
          l’informatique, aux fichiers et aux libertés, ce site n’a pas fait l’objet d’une déclaration auprès de la
          Commission nationale de l’informatique et des libertés (www.cnil.fr). Pour plus d’informations sur le
          traitement de nos données sensibles, veuillez consulter notre Politique de Confidentialité</p>
      </div>

    </main>


    <footer>
      <FooterPage/>
    </footer>

  </div>
</template>

<script>

import FooterPage from "../components/FooterPage";


export default {
  name: "Mention",
  components: {FooterPage},
}
</script>


<style scoped lang="less">

#img-background {
  height: 40vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;

  background-color: #70707020;

  background-image: url("../assets/media/Coach_fitness-fond_flou.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: darken;

  z-index: -10;
}

header {
  padding: 0 40px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0;

  & > * {
    margin-bottom: 50px;
  }

  & > h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
    font-size: 60px;
    max-width: 423px;
    width: 100%;
  }

  & > h2 {
    font-family: 'Merriweather', serif;
    font-weight: lighter;
    font-size: 30px;
    max-width: 423px;
    width: 100%;
  }
}

main {
  font-family: 'Urbanist', sans-serif;

  display: flex;
  flex-direction: column;

  & h2 {
    font-size: 40px;
    margin: 20px auto;
    display: inline-block;

    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    text-align: center;

  }
}

main {
  margin-top: 50px;
  width: 100%;
  background: var(--light_gray);

  display: flex;
  align-items: center;

  & h2 {
    font-size: 40px;
    margin: 20px auto;
    display: inline-block;

    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    text-align: center;
  }
}

.white_bg {
  margin: 25px;
  padding: 70px;

  width: calc(100% - 100px);
  width: -webkit-fill-available;

  background: white;

  font-size: 20px;

  & h3 {
    font-size: 22px;
    margin: 20px;
    padding-top: 20px;
  }

  & p {
    margin-bottom: 10px;
  }
}


</style>
