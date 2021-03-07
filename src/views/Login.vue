<template>
  <div id="login">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="login-div">
            <h3>Inserire i dati ricevuti</h3>

            <form @submit.prevent="submitForm">
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-3 col-form-label">Username</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="staticEmail" v-model="email" required>
                </div>
              </div>
              <div class="form-group row mb-4">
                <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
                <div class="col-sm-9">
                  <input type="password" class="form-control" id="inputPassword" v-model="password" required>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    Informativa sulla Privacy, testo di esempio
                  </label>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <button type="submit" class="btn btn-primary mb-2" v-if="!loading">ENTRA</button>

                  <button class="btn btn-primary mb-2" type="button" disabled v-if="loading">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import firebase from 'firebase';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      if (!this.email.includes('@')) {
        this.email = `${this.email}@admin.com`
      }

      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('area-pazienti');
          this.loading = false;
        },
        (err) => {
          alert('ERROR: ' + err.message);
          this.loading = false;
        },
      );
    },
  },
};
</script>

<style lang="scss">
  #login {
    padding: 60px 0;
    min-height: 350px;

    .login-div {
      padding: 25px;
      background-color: #FFFFFF;
      text-align: center;

      h3 {
        font-size: 30px;
        font-weight: 300;
        line-height: 1.16;
        margin: 0 0 30px;
      }

      .form-group {
        .col-form-label {
          font-weight: 900;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .form-control {
          background-color: #e5e5e5;
          border-radius: 0;
        }
      }

      button {
        background-color: #314057;
        padding: 0.375rem 2.75rem;
        border-radius: 0;
        border: 0;
      }
    }
  }
</style>
