<template>
  <div id="innovazione">
    <div class="container">
      <div class="row">
        <div class="col-md-3 img-div">
          <a href="http://www.tfrtechnology.it/" target="_blank">
            <img src="@/assets/images/tfr-logo.png" />
            <p>www.tfrtechnology.it</p>
          </a>
        </div>

        <div class="col-md-7">
          <div class="text-container">
            <p>
              TFR Technology nasce nel 2003 da un gruppo di Professionisti per divulgare le ricerche svolte presso l’Università degli Studi di Milano riguardo la misurazione scientifica della funzione orale.
              <br><br>
              Francesco e Riccardo Rosati si impegnano da allora con passione per garantire continuità a questa stimolante iniziativa.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    mounted() {
      let screenHeight = window.innerHeight;
      let appHeight = document.getElementById('app').clientHeight;

      if (appHeight < screenHeight) {
        console.log(document.getElementById('innovazione'));
        let a = document.getElementById('innovazione');
        a.style.minHeight = (a.clientHeight + (screenHeight - appHeight)) + 'px';
      }
    }
  }
</script>

<style lang="scss">
  #innovazione {
    padding: 60px 0;
    min-height: 350px;

    .text-container {
      color: #383838;

      p {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 1.15;
      }
    }

    .img-div {
      img {
        width: 100%;
        max-width: 150px;
        margin-bottom: 15px;
      }

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        color: #383838;
      }
    }
  }
</style>
