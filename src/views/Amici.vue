<template>
  <div id="amici">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-md-6 align-self-center text-right">
          <a href="https://goo.gl/maps/bsE2FA2nRBf84ibt6" class="contact-box-div" target="_blank">
            <h3>Recensione Google:</h3>

            <p>
              Studio dentistico Udine Rosati Dr. Riccardo
            </p>

            <img src="../assets/images/google_maps.png" alt="google maps" />
          </a>
        </div>

        <div class="col-md-6 align-self-center">
          <a href="https://www.facebook.com/RosatiOdontoiatria/reviews/?ref=page_internal" class="contact-box-div" target="_blank">
            <h3>Recensione Facebook:</h3>

            <p>
              Rosati Odontoiatria
            </p>

            <img src="../assets/images/facebook.png" alt="facebook" />
          </a>
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
  #amici {
    background: #fff;
    height: calc(100vh - 538px);

    .contact-box-div {
      border-left: 1px solid #314857;
      padding: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      position: relative;

      &:hover {
        text-decoration: none;
      }

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

      img {
        width: 100%;
        max-width: 128px;
      }
    }
  }
</style>
