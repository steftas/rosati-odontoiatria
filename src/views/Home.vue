<template>
  <div id="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 id="h1-home">Cura della bocca secondo principi scientifici moderni.</h1>
        </div>
      </div>
    </div>

    <div id="home-menu">
      <div class="container">
        <div class="row">
          <div class="col-md-4 align-items-center">
            <router-link to="/terapia" tag="div" class="home-menu-div effect-box">
              <h3>terapia</h3>

              <p>Prevenzione e trattamento delle malattie della bocca</p>
            </router-link>
          </div>

          <div class="col-md-4 align-items-center">
            <router-link to="/protesi" tag="div" class="home-menu-div effect-box">
              <h3>Protesi</h3>

              <p>Produzione <br /> di protesi dentali</p>
            </router-link>
          </div>

          <div class="col-md-4 align-items-center">
            <router-link to="/innovazione" tag="div" class="home-menu-div effect-box">
              <h3>Innovazione</h3>

              <p>Sviluppo e divulgazione di tecniche per la misura della funzione masticatoria</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
      mounted() {
          setTimeout(() => {
              let screenHeight = window.innerHeight;
              let appHeight = document.getElementById('app').clientHeight;
              let a = document.getElementById('h1-home');
              a.style.minHeight = (a.clientHeight + (screenHeight - appHeight)) + 'px';
          }, 1)
      }
  }
</script>

<style lang="scss">
  #home {
    h1 {
      font-style: normal;
      font-weight: 300;
      font-size: 65px;
      line-height: 105%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: #314057;
    }

    #home-menu {
      background: linear-gradient(90deg, #151B52 0%, #36465D 100%);
      padding: 30px 15px 0;

      .home-menu-div {
        cursor: pointer;
        color: #fff;
        border-left: 1px solid #fff;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        position: relative;

        h3 {
          font-style: normal;
          font-weight: 900;
          font-size: 21px;
          line-height: 27px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        p {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 140%;
          font-family: 'Open Sans', sans-serif !important;
        }
      }
    }

    /*effect-box*/
    .effect-box:after,
    .effect-box:before {
      content: '';
      position: absolute;
      left: 0;
      display: inline-block;
      height: 100%;
      width: 100%;
      opacity: 0;
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s, transform 0.35s;
      
    }

    .effect-box:before {
      border-left: 0px solid;
      border-right: 1px solid;
      -webkit-transform: scale(1,0);
      transform: scale(1,0);
    }

    .effect-box:after {
      border-bottom: 1px solid;
      border-top: 1px solid;
      -webkit-transform: scale(0,1);
      transform: scale(0,1);
    }

    .effect-box:hover:after,
    .effect-box:hover:before {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @media screen and (max-width: 1440px) {
    #home {
      h1 {
        font-size: 55px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    #home {
      #home-menu {
        .row {
          > div {
            margin: 0 0 15px;
          }
        }
      }
    }
  }
</style>
