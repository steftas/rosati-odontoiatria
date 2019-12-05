<template>
  <div id="area-pazienti">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="login-div">
            <h3>Area pazienti</h3>
            <button @click="logout">Logout</button>
          </div>

          <div class="row download-row">
            <div class="col-md-4 col-sm-6">
              <a href="http://easymyo.it/wp-content/uploads/2019/marina-di-carrar-7-8-giugno.pdf">
                <img src="@/assets/images/file-download-solid.svg" />
                <span> Test download 1</span>
              </a>
            </div>
            <div class="col-md-4 col-sm-6">
              <a href="http://easymyo.it/wp-content/uploads/2019/marina-di-carrar-7-8-giugno.pdf">
                <img src="@/assets/images/file-download-solid.svg" />
                <span> Test download 2</span>
              </a>
            </div>
            <div class="col-md-4 col-sm-6">
              <a href="http://easymyo.it/wp-content/uploads/2019/marina-di-carrar-7-8-giugno.pdf">
                <img src="@/assets/images/file-download-solid.svg" />
                <span> Test download 3</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import firebase from "firebase";

  export default {
    name: 'area-pazineti',
    mounted() {
      let screenHeight = window.innerHeight;
      let appHeight = document.getElementById('app').clientHeight;

      if (appHeight < screenHeight) {
        console.log(document.getElementById('area-pazienti'));
        let a = document.getElementById('area-pazienti');
        a.style.minHeight = (a.clientHeight + (screenHeight - appHeight)) + 'px';
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login');
        })
      }
    }
  }
</script>

<style lang="scss">
  #area-pazienti {
    padding: 30px 0;
    min-height: 350px;

    .login-div {
      padding: 25px;
      background-color: #FFFFFF;
      text-align: center;

      h3 {
        font-size: 30px;
        font-weight: 300;
        line-height: 1.16;
        margin: 0 0 15px;
      }

      button {
        background-color: #314057;
        padding: 0.375rem 2.75rem;
        border-radius: 0;
        border: 0;
        color: #FFFFFF;
      }
    }

    .download-row {
      a {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #2c3c54;
        padding: 30px 0;

        &:hover {
          text-decoration: none;
        }

        img {
          width: 100%;
          max-width: 50px;
          max-height: 50px;
          display: block;
          margin: 0 0 15px;
        }
      }
    }
  }
</style>
