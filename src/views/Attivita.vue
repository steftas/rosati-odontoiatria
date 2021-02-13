<template>
  <div id="attivita">
    <div class="container">
      <div class="row">
        <div class="col-md-3" style="overflow: hidden">
          <div class="responsive-menu-bars" @click="menuToggle()">
            <img src="@/assets/images/bars-solid.svg" />
          </div>

          <ul class="responsive-sub-menu">
            <li v-for="menuLabel in attivitaList" @click="selectTab(menuLabel.id)" :class="{'active': activeTab === menuLabel.id}">
              <span>{{menuLabel.title}}</span>
            </li>
          </ul>
        </div>

        <div class="col-md-9">
          <div v-for="attivita in attivitaList" class="text-container" v-if="activeTab === attivita.id">
            <h3>{{attivita.title}}</h3>

            <p v-html="attivita.text"></p>

            <div class="share-div">
              <span @click="showShareBtns = !showShareBtns">condividi</span>

              <div class="share-btns" v-if="showShareBtns">
                <!-- Sharingbutton Facebook -->
                <a class="resp-sharing-button__link" :href="'https://facebook.com/sharer/sharer.php?u=' + currentUrl + '/' + attivita.id" target="_blank" rel="noopener" aria-label="">
                  <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                  </div>
                  </div>
                </a>

                <!-- Sharingbutton Twitter -->
                <a class="resp-sharing-button__link" :href="'https://twitter.com/intent/tweet/?text=url=' + currentUrl + '/' + attivita.id" target="_blank" rel="noopener" aria-label="">
                  <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                  </div>
                  </div>
                </a>

                <!-- Sharingbutton Linkedin -->
                <a class="resp-sharing-button__link" :href="'https://www.linkedin.com/shareArticle?mini=true&url=' + currentUrl + '/' + attivita.id + '&title=' + attivita.title" target="_blank" rel="noopener" aria-label="">
                  <div class="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>                  </div>
                  </div>
                </a>
              </div>
              <a :href="attivita.link" target="_blank" v-if="attivita.link">LINK</a>
            </div>

            <div class="image-div">
              <img :src="attivita.imageUrl" :alt="attivita.img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const fb = require('../firebaseConfig.ts');

export default {
  data() {
    return {
      activeTab: '',
      attivitaList : [],
      menuShown: false,
      showShareBtns: false,
      currentUrl: window.location.href,
    };
  },
  created() {
    this.loadAttivita();
  },
  methods: {
    selectTab(tab: string) {
      this.activeTab = tab;
      this.menuToggle();
    },
    loadAttivita() {
      // realtime updates from our posts collection
      fb.attivitaCollection.orderBy('dateCreated', 'desc').onSnapshot((querySnapshot)  => {

        let index = 0;
        querySnapshot.forEach((doc) => {
          const post = doc.data();
          post.id = doc.id;
          this.attivitaList.push(post);

          if (index == 0) {
            this.activeTab = doc.id;
          }
          index++;
        });
      });
    },
    menuToggle() {
      if (window.innerWidth < 768) {
        const ul = (<HTMLElement>document.getElementsByClassName('responsive-sub-menu')[0]);

        if (this.menuShown) {
            ul.style.position = 'absolute';
        } else {
            ul.style.position = 'static';
        }

        this.menuShown = !this.menuShown;
      }
    }
  }
}
;;
</script>

<style lang="scss">
  #attivita {
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
          font-weight: 900;
          font-size: 18px;
          line-height: 40px;
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #314057;
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

      h3 {
        font-weight: 300;
        font-size: 30px;
        line-height: 116%;
        margin: 0 0 30px;
      }

      p {
        font-family: 'Open Sans', sans-serif !important;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
      }

      .share-div {
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0.1em;
        text-decoration: underline;
        text-transform: uppercase;
        margin: 0 !important;
        min-height: 60px;
        position: relative;
        cursor: pointer;

        a {
          margin-left: 15px;
          color: inherit;
        }

        .share-btns {
          position: absolute;
          bottom: 0;
          
          .resp-sharing-button__link,
          .resp-sharing-button__icon {
            display: inline-block
          }

          .resp-sharing-button__link {
            text-decoration: none;
            color: #fff;
            margin: 0.5em;
            margin-left: 0;
          }

          .resp-sharing-button {
            border-radius: 5px;
            transition: 25ms ease-out;
            padding: 0.5em 0.75em;
            font-family: Helvetica Neue,Helvetica,Arial,sans-serif
          }

          .resp-sharing-button__icon svg {
            width: 1em;
            height: 1em;
            margin-right: 0.4em;
            vertical-align: top
          }

          .resp-sharing-button--small svg {
            margin: 0;
            vertical-align: middle
          }

          /* Non solid icons get a stroke */
          .resp-sharing-button__icon {
            stroke: #fff;
            fill: none
          }

          /* Solid icons get a fill */
          .resp-sharing-button__icon--solid,
          .resp-sharing-button__icon--solidcircle {
            fill: #fff;
            stroke: none
          }

          .resp-sharing-button--twitter {
            background-color: #55acee
          }

          .resp-sharing-button--twitter:hover {
            background-color: #2795e9
          }

          .resp-sharing-button--facebook {
            background-color: #3b5998
          }

          .resp-sharing-button--facebook:hover {
            background-color: #2d4373
          }

          .resp-sharing-button--linkedin {
            background-color: #0077b5
          }

          .resp-sharing-button--linkedin:hover {
            background-color: #046293
          }

          .resp-sharing-button--facebook {
            background-color: #3b5998;
            border-color: #3b5998;
          }

          .resp-sharing-button--facebook:hover,
          .resp-sharing-button--facebook:active {
            background-color: #2d4373;
            border-color: #2d4373;
          }

          .resp-sharing-button--twitter {
            background-color: #55acee;
            border-color: #55acee;
          }

          .resp-sharing-button--twitter:hover,
          .resp-sharing-button--twitter:active {
            background-color: #2795e9;
            border-color: #2795e9;
          }

          .resp-sharing-button--google {
            background-color: #dd4b39;
            border-color: #dd4b39;
          }

          .resp-sharing-button--google:hover,
          .resp-sharing-button--google:active {
            background-color: #c23321;
            border-color: #c23321;
          }
        }
      }

      .image-div {
        text-align: center;
        padding: 15px;
        background-color: #fff;

        img {
          width: 100%;
          max-width: 500px;
        }
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
    #attivita {
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
