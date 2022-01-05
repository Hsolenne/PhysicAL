<template>
  <div>

    <div id="img-background">
    </div>

    <header>
      <h1>Contact</h1>
      <h2>Bougez simplement</h2>
    </header>

    <main>
      <h2>Laissez moi un <span class="title_underline">message !</span></h2>

      <div id="white_bg">
        <h2><span class="title_underline">Inscription</span></h2>


        <form action="" method="get">
          <div id="form_part_1">
            <div>
              <input type="text" placeholder="Prénom" name="name_user" id="name_user" required>
            </div>

            <div>
              <input type="text" placeholder="Nom" name="surname_user" id="surname_user" required>
            </div>
          </div>
          <div id="form_part_2">

            <div>
              <input type="email" placeholder="E-Mail" name="email_user" id="email_user" required>
            </div>

            <div id="div_message_contact">
              <input type="text" placeholder="Entrez votre message ici." name="message_contact" id="message_contact" required>
            </div>
          </div>


          <section id="submit_button">

            <button class="blue-button">Envoyer</button>

          </section>
        </form>


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
  name: "Contact",
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
  margin-bottom: 80px;

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


  display: flex;
  flex-direction: column;


  & h2 {
    font-size: 40px;
    margin: 60px auto;
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
    margin: 60px auto;
    display: inline-block;

    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    text-align: center;

  }

  & button {
    width: 200px;
    margin: 50px 10px;
  }


}


#white_bg {
  margin: 25px;
  padding: 25px;

  width: calc(100% - 100px);
  width: -webkit-fill-available;

  background: white;
}

form {

  width: 100%;

  & div > div {
    min-width: calc(50% - 55px);
    height: 42px ;
    margin-right: 55px;
    margin-bottom: 20px;
    position: relative;


    & > input {
      width: 100%;
      height: 100%;
    }

  }



}

#form_part_1 {
  display: flex;
  flex-wrap: wrap;
}

div#div_message_contact {
  height: 516px;
}



</style>
