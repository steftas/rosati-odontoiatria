<template>
  <div id="area-pazienti">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="login-div">
            <h3>Area pazienti</h3>
            <button @click="logout">Logout</button>

            <p class="text-left mt-5">
              Gentile Paziente,
              <br />
              In questa area riservata le proponiamo una serie di approfondimenti riguardo la salute orale.
              <br />
              Troverà documenti da noi redatti o scrupolosamente controllati al fine di garantirle un'informazione
              scientificamente corretta in un ambito -la salute- in cui spesso inesattezze e approssimazioni generano
              confusione.
            </p>
          </div>

          <div class="row download-row">
            <div class="col-12">
              <ul>
                <li>
                  <a href="https://sway.office.com/4xSNQ5JU61pBLYHe?ref=Link" target="_blank" rel="noopener">
                    <span>La diga di gomma</span>
                  </a>
                </li>

                <li>
                  <a href="https://sway.office.com/88dStYrwHSJ0NqQZ?ref=Link" target="_blank" rel="noopener">
                    <span>Protesi fissa cementata su denti naturali</span>
                  </a>
                </li>
                <li>
                  <a href="https://sway.office.com/nzF2e3GSXZ26KtOq?ref=Link" target="_blank" rel="noopener">
                    <span>Ricostruzione dentale tramite perno in fibra</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/gacdjKeqPDjvZMlu?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Igiene dentale professionale</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/K9RBzbg0EfKqWyUJ?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Ricostruzione dentale diretta (otturazione)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/1lmQ9WDLBsyVyHTG?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Levigatura radicolare</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/Nmty6pkj4t7iG30E?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Intarsio in ceramica/composito</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/DIOO6gUV5m5otjKU?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Protesi dentale su impianti</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/xHWgrJRdhfdXnVBT?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Aumento di volume osseo</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/f2FRTBjCGNSgVfYC?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Trattamento canalare</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/gOsMkh3WvN1ml718?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>La patologia parodontale</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/JfslArm9BpM06Ydy?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>La radiografia odontoiatrica</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/t91ASzZu8qWO8yUR?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Fluoroprofilassi</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/FPjHXhuvjXK0hqD2?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Lesioni non cariose dei denti</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/7olc386FrOTg6xof?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Otturazioni, quale materiale?</span>
                  </a>
                </li>
                <li>
                  <a href="https://sway.office.com/b2jjB7zN40fN1yyo?ref=Link" target="_blank" rel="noopener">
                    <span>Lesioni dello smalto nel piccolo paziente</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sway.office.com/mApQ5Y5rhnKW18r3?ref=Link&loc=mysways"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Sbiancamento dentale</span>
                  </a>
                </li>
              </ul>
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
  name: "area-pazineti",
  mounted() {
    const screenHeight = window.innerHeight;
    const appHeight = document.getElementById("app").clientHeight;

    if (appHeight < screenHeight) {
      console.log(document.getElementById("area-pazienti"));
      const a = document.getElementById("area-pazienti");
      a.style.minHeight = a.clientHeight + (screenHeight - appHeight) + "px";
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
  },
};
</script>

<style lang="scss">
#area-pazienti {
  padding: 30px 0;
  min-height: 350px;

  .login-div {
    padding: 25px;
    background-color: #ffffff;
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
      color: #ffffff;
    }
  }

  .download-row {
    ul {
      li {
        padding: 8px 16px;

        a {
          color: #2c3c54;
        }
      }
    }
  }
}
</style>
