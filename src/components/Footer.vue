<template>
  <div id="footer-component">
    <div id="gradient-footer-bar"></div>

    <div id="footer-slider" data-toggle="modal" data-target="#img-slider-modal">
      <img src="@/assets/images/external-link-alt-solid.svg" />
    </div>

    <div id="footer-bottom-bar" class="text-center">
      <div class="row">
        <div class="col-sm-4 col-12">
          <span><b>Studio dentistico</b> P.IVA 02468410309</span>
        </div>

        <div class="col-sm-4 col-12">
          <span><b>Isodent Srl</b> P.IVA 02516160302</span>
        </div>

        <div class="col-sm-4 col-12">
          <span><b>TFR Technology Srl</b> P.IVA 04079660967</span>
        </div>
      </div>
    </div>

    <div id="img-slider-modal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

          <Slider />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Slider from '@/components/Slider.vue';

export default  {
  data() {
    return {
      images: [
        {
          id: 1,
          img: '/img/Maggi-Roberto_Alba-a-San-Zenone-al-Po.5be0da8d.jpg',
        },
        {
          id: 2,
          img: '/img/Capochiani-Armando-Sotto-il-ponte-della-Becca.65278984.jpg',
        },
        {
          id: 3,
          img: '/img/Coscia-Giancarlo--Il-Po-a-Spessa.4e032f4b.jpg',
        },
        {
          id: 4,
          img: '/img/Trupia-Giuseppe_-Il-Po-Colori-e-poesia.30f92103.jpg',
        },
        {
          id: 5,
          img: '/img/Pretti-Stefano_Kingfisher.6ce2a18b.jpg',
        },
        {
          id: 6,
          img: '/img/Casella-Emanuele--Sole-rosso.4ef7bcab.jpg',
        },
        {
          id: 7,
          img: '/img/Donkersloot-Berry_Tramonto-a-San-Zenone-Po.327c65b8.jpg',
        },
        {
          id: 8,
          img: '/img/Francalanza-Chiara-Luceo-dopo-la-tempesta.e22b6e39.jpg',
        },
        {
          id: 9,
          img: '/img/Iuculano-Andrea---Canevino.49b3949f.jpg',
        },
        {
          id: 10,
          img: '/img/Sampirisi-Simone--Luci-di-Costa.0cc27841.jpg',
        },
        {
          id: 11,
          img: '/img/Schinelli-Adriano-Il-grande-fiume.f48b971c.jpg',
        },
        {
          id: 12,
          img: '/img/Torta-Livio_-la-mia-terra,-il-mio-grano,-il-mio-pane-quotidiano.739a57b9.jpg',
        },
        {
          id: 13,
          img: '/img/Venturino-Monica-Suggestioni-in-Oltrepò.1132d257.jpg',
        },
        {
          id: 14,
          img: '/img/Moreno-Bordoni_il-grande-fiume.de0aa52f.jpg',
        },
      ],
    };
  },
  created() {
    const slider = document.getElementById('footer-slider');
    let i = 0;

    setInterval(() => {
      if (i == this.images.length - 1) {
        i = 0;
      } else {
        i++;
      }
      document.getElementById('footer-slider').style.backgroundImage = `url(${this.images[i].img})`;
    }, 5000);
  },
  components: {
    Slider,
  },
  mounted() {
      if (this.$route.name !== 'home') {
          document.getElementById('gradient-footer-bar').style.minHeight = '70px';
      } else {
          document.getElementById('gradient-footer-bar').style.minHeight = '30px';
      }
  },
  watch: {
      $route() {
          if (this.$route.name !== 'home') {
              document.getElementById('gradient-footer-bar').style.minHeight = '70px';
          } else {
              document.getElementById('gradient-footer-bar').style.minHeight = '30px';
          }
      },
  },
};
</script>

<style scoped lang="scss">
  #footer-component {
    #gradient-footer-bar {
      min-height: 30px;
      background: linear-gradient(90deg, #151B52 0%, #36465D 100%);
    }

    #footer-slider {
      min-height: 200px;
      background-color: #151B52;
      background-image: url('~@//assets/images/slider/Maggi-Roberto_Alba-a-San-Zenone-al-Po.jpg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
      transition: all ease 1s;
      position: relative;

      img {
        position: absolute;
        width: 50px;
        top: 10px;
        left: 10px;
        opacity: 0.8;
      }
    }

    #footer-bottom-bar {
      background: #fff;
      padding: 15px;
    }

    #img-slider-modal {
      .modal-lg {
        max-width: 70%;
        max-height: 850px;

        .modal-content {
          background: #000000;

          > button {
            position: absolute;
            top: -25px;
            right: -20px;
            font-size: 35px;
            color: #fff;
          }
        }
      }
    }
  }

  @media screen and (max-width: 575px) {
    #footer-component {
      #img-slider-modal {
        .modal-lg {
          max-width: 90%;
        }
      }
    }
  }
</style>