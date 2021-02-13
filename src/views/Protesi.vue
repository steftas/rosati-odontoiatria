<template>
  <div id="protesi">
    <div class="container">
      <div class="row">
        <div class="col-md-3" style="overflow: hidden">
          <div class="responsive-menu-bars" @click="menuToggle()">
            <img src="@/assets/images/bars-solid.svg" />
          </div>

          <ul class="responsive-sub-menu">
            <li @click="selectTab('storia')" :class="{'active': activeTab === 'storia'}">
              <span>Storia</span>
              <svg width="69" height="7" viewBox="0 0 69 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.514648 0.876953V6.87695L68.252 0.876953H0.514648Z" fill="#5F9B5F"/>
              </svg>
            </li>

            <li @click="selectTab('modelo')" :class="{'active': activeTab === 'modelo'}">
              <span>Modello operativo</span>
              <svg width="180" height="7" viewBox="0 0 180 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.839844 0.0255127V6.02551L179.25 0.0255127H0.839844Z" fill="#5F9B5F"/>
              </svg>
            </li>

            <li @click="selectTab('tecnologie')" :class="{'active': activeTab === 'tecnologie'}">
              <span>Tecnologie</span>
              <svg width="112" height="7" viewBox="0 0 112 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.839844 0.456177V6.45618L111.84 0.456177H0.839844Z" fill="#5F9B5F"/>
              </svg>
            </li>
          </ul>
        </div>

        <div class="col-md-9">
          <div class="text-container" v-if="activeTab === 'storia'">
            <p>
              Il laboratorio odontoprotesico Isodent srl viene fondato da Francesco Rosati <a href="https://www.linkedin.com/in/francescorosatiudine/" target="_blank"><img class="linkedin" src="@/assets/images/linkedin.png" alt="linkedin" /></a> nel 1977 per fornire protesi ad Odontoiatri cultori di occlusione, interessati a fornire ai propri Pazienti riabilitazioni funzionali integrate al meglio nel cavo orale.
              <br><br>
              Il desiderio di continuare a soddisfare queste richieste motiva da allora un costante perfezionamento.
            </p>
          </div>

          <div class="text-container" v-if="activeTab === 'modelo'">
            <p>
              Ogni protesi odontoiatrica è:
            </p>

            <ul>
              <li>Progettata digitalmente tramite tecnologie CAD</li>
              <li>Condivisa con l’Odontoiatra committente per eventuali modifiche al progetto e specifiche dei materiali</li>
              <li>Prodotta tramite fresatura dal pieno con macchinari CAM a controllo numerico</li>
              <li>Personalizzata e rifinita nel dettaglio da esperti artigiani.</li>
            </ul>
          </div>

          <div class="text-container" v-if="activeTab === 'tecnologie'">
            <p>
              Nel lavoro quotidiano utilizziamo i principali software di modellazione 3D.
            </p>

            <div class="row align-items-center">
              <div class="col-md-3 col-sm-6 img-div">
                <img src="@/assets/images/mayka.png" />
              </div>

              <div class="col-md-3 col-sm-6 img-div">
                <img src="@/assets/images/exocad.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeTab: 'storia',
      menuShown: false,
    };
  },
  mounted() {
    const screenHeight = window.innerHeight;
    const appHeight = document.getElementById('app').clientHeight;

    if (appHeight < screenHeight) {
      const a = document.getElementById('protesi');
      a.style.minHeight = (a.clientHeight + (screenHeight - appHeight)) + 'px';
    }
  },
  methods: {
    selectTab(tab: string) {
      this.activeTab = tab;

      if (window.innerWidth < 767) {
          this.menuToggle();
      }
    },
    menuToggle() {
      const ul = (document.getElementsByClassName('responsive-sub-menu')[0] as HTMLElement);

      if (this.menuShown) {
        ul.style.position = 'absolute';
      } else {
        ul.style.position = 'static';
      }

      this.menuShown = !this.menuShown;
    },
  },
};
</script>

<style lang="scss">
  #protesi {
    padding: 60px 0;
    min-height: 350px;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        cursor: pointer;
        position: relative;

        span {
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 32px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #383838;
          cursor: pointer;
          position: relative;
          transition: all 0.5s ease;
        }

        svg {
          position: absolute;
          bottom: 0;
          left: 0;
          opacity: 0;
          transition: all 0.5s ease;
        }

        &:hover, &.active {
          span {
            color: #5F9B5F;
          }

          svg {
            opacity: 1;
          }
        }
      }
    }

    .text-container {
      color: #383838;

      p {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 1.15;
      }

      ul {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 1.15;

        li {
          position: relative;
          padding-left: 15px;

          &:before {
            color: #5F9B5F;
            content: "\2022";
            font-size: 22px;
            position: absolute;
            top: 4px;
            left: 0;
          }
        }
      }

      .img-div {
        text-align: center;
        padding-top: 15px;

        img {
          width: 100%;
          max-width: 100px;
        }

        p {
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 20px;
          text-align: center;
          color: #383838;
        }
      }

      .linkedin {
        width: 100%;
        max-width: 25px;
        position: relative;
        top: -2px;
      }
    }

    .responsive-menu-bars {
      display: none;
      max-width: 30px;
      cursor: pointer;
      margin: 0 0 15px;
    }
    .responsive-sub-menu {
      position: static;
      transition: all ease 0.5s;
    }
  }

  @media screen and (max-width: 767px) {
    #protesi {
      padding: 15px 0;

      ul {
        margin: 0 0 15px;
      }

      .responsive-menu-bars {
        display: block;
      }
      .responsive-sub-menu {
        position: absolute;
      }
    }
  }
</style>
