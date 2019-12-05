<template>
  <div id="admin-attivita">
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          <h1 class="text-uppercase mt-4 mb-4">Admin panel</h1>
        </div>
      </div>

      <div class="row text-center justify-content-center mb-5">
        <div class="col">
          <router-link to="/admin-attivita" tag="span">Attivita</router-link>
        </div>

        <div class="col">
          <router-link to="/admin-pazienti" tag="span">Area Pazienti</router-link>
        </div>

        <div class="col">
          <router-link to="/admin-slider" tag="span">Slider</router-link>
        </div>

        <div class="col">
          <button class="btn btn-info" @click="logout">Logout</button>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title" placeholder="Title" v-model="title" required>
            </div>

            <div class="form-group">
              <label for="imageUrl">Title</label>
              <input type="text" class="form-control" id="imageUrl" placeholder="Image url" v-model="imageUrl">
            </div>

            <div class="form-group">
              <label for="link">Link</label>
              <input type="text" class="form-control" id="link" placeholder="Link" v-model="link">
            </div>

            <div class="form-group">
              <label for="text">Text</label>
              <textarea class="form-control" id="text" rows="5" placeholder="Text" v-model="text" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  const fb = require('../firebaseConfig.ts');

  export default {
    name: 'adminattivita',
    data() {
      return {
        title: '',
        imageUrl: '',
        link: '',
        text: ''
      }
    },
    methods: {
      logout() {
        fb.auth.signOut().then(() => {
          this.$router.replace('login');
        })
      },
      submitForm() {
        let data = {
          title: this.title,
          imageUrl: this.imageUrl,
          link: this.link,
          text: this.text
        };

        fb.attivitaCollection.add(data).then( (response) => {
          console.log('RES', response);
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss">
  #admin-attivita {
    min-height: 100vh;

    span {
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #333;
      cursor: pointer;
      position: relative;
      transition: all 0.5s ease;

      &:hover, &.router-link-active {
        color: #5F9B5F;
      }
    }
  }
</style>
