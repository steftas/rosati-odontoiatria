<template>
  <div id="contatti">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="contact-box-div">
            <h3>Studio dentistico Udine</h3>

            <p>
              Viale della Vittoria 7, Udine (UD)<br>
              tel. 0432 297885<br>
              udine@rosatiodontoiatria.com
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="contact-box-div">
            <h3>Studio dentistico San Zenone</h3>

            <p>
              Via G. Marconi 12, San Zenone al Po (PV)<br>
              tel. 0382 79138<br>
              sanzenone@rosatiodontoiatria.com
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="contact-box-div">
            <h3>TFR Technology S.r.l.</h3>

            <p>
              V.le Tricesimo 103, Udine (UD)<br>
              tel. 0432 479788<br>
              info@tfrtechnology.it
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="contact-box-div">
            <h3>Laboratorio odontoprotesico</h3>

            <p>
              V.le Tricesimo 103, Udine (UD)<br>
              tel. 0432 479788<br>
              lab@rosatiodontoiatria.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {

};
</script>

<style lang="scss">
  #contatti {
    padding: 60px 0;
    min-height: 350px;

    .row > div {
      margin: 0 0 60px;
    }

    .contact-box-div {
      border-left: 1px solid #314857;
      padding: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      position: relative;

      h3 {
        font-style: normal;
        font-weight: 300;
        font-size: 38px;
        line-height: 116%;
        color: #314857;
      }

      p {
        font-family: 'Open Sans', sans-serif !important;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #383838;
      }
    }
  }
</style>
