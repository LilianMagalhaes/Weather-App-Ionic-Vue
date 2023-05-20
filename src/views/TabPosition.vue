<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-no-padding ion-no-margin">
        <ion-grid>
          <ion-row>
            <ion-col
              ><ion-title class="ion-text-left"
                >Position actuelle</ion-title
              ></ion-col
            >
            <ion-col class="currentDate ion-text-right">{{
              currentDate
            }}</ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Position Actuelle</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid class="ion-padding">
          <ion-row class="ion-justify-content-center">
            <ion-card v-if="weather?.current">
              <ion-grid class="weather-background">
                <ion-row class="ion-justify-content-center"
                  ><img
                    :src="`src/assets/icons/${weather.current.weather[0].icon}.png`"
                /></ion-row>
                <ion-row class="ion-justify-content-center">
                  <span class="city-name">{{ city }} {{ state }}</span>
                </ion-row>
              </ion-grid>
              <ion-card-header>
                <ion-card-subtitle>
                  {{ weather.current.weather[0].description }}
                </ion-card-subtitle>
                <ion-card-title>
                  {{ formatTemperature(weather?.current.temp) }}
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-grid>
                  <ion-row>
                    <ion-col class="ion-text-center">
                      <ion-card-subtitle>Ressenti</ion-card-subtitle>
                      <ion-card-title>
                        <p>
                          {{ formatTemperature(weather.current.feels_like) }}
                        </p>
                      </ion-card-title>
                    </ion-col>
                    <ion-col class="ion-text-center">
                      <ion-card-subtitle>Vents</ion-card-subtitle>
                      <ion-card-title>
                        <p>{{ Math.round(weather.current.wind_speed) }} km/h</p>
                      </ion-card-title>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col class="ion-text-center">
                      <ion-card-subtitle>Lever du soleil</ion-card-subtitle>
                      <ion-card-title>
                        <p>
                          {{
                            new Date(
                              weather.current.sunrise * 1000
                            ).toLocaleTimeString(undefined, {
                              timeStyle: "short",
                            })
                          }}
                        </p>
                      </ion-card-title>
                    </ion-col>
                    <ion-col class="ion-text-center">
                      <ion-card-subtitle>Coucher du soleil</ion-card-subtitle>
                      <ion-card-title>
                        <p>
                          {{
                            new Date(
                              weather.current.sunset * 1000
                            ).toLocaleTimeString(undefined, {
                              timeStyle: "short",
                            })
                          }}
                        </p>
                      </ion-card-title>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card-content>
            </ion-card>
          </ion-row>
        </ion-grid>
        <span class="copyright">© Lilian Magalhaes & Anayika Pauyo</span>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCardHeader,
  IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";
import {
  useWeather,
  getCurrentPositionName,
  getImageName,
} from "@/services/weather_service";

export default defineComponent({
  name: "Tab1",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonCol,
    IonRow,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonCardHeader,
    IonImg,
  },
  ionViewDidEnter() {
    this.getPositionName();
  },
  data() {
    const { weather, formatTemperature } = useWeather();
    return {
      city: "",
      state: "",
      weather,
      formatTemperature,
      currentDate: "",
    };
  },
  mounted() {
    this.currentDate = new Date().toLocaleDateString("fr-CA", {
      weekday: "long",
      month: "long",
      year: "numeric",
      day: "numeric",
    });
  },
  methods: {
    async getPositionName() {
      let position = await getCurrentPositionName();
      console.log(`position`);

      this.city = `${position[0].name},`;
      this.state = `${position[0].state},`;
    },
  },
});
</script>

<style scoped>
ion-title {
  padding-top: 5px;
  padding-left: 0;
  font-size: 1.3em;
}

.currentDate {
  padding-top: 15px;
  padding-right: 10px;
  font-size: 0.9em;
}

ion-card {
  --background: var(--color-card);
  margin-top: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 0;
  width: 100%;
  max-width: 380px;
  min-width: 210px;
}

.weather-background {
  justify-content: center;
  align-items: center;
  background-color: rgba(63, 127, 152, 0.8);
  border-radius: 5px;
  width: 100%;
}

ion-content {
  --background: url("src/assets/images/background-morning.jpeg") no-repeat
    center/cover fixed;
}

span {
  color: var(--card-city-color);
  font-size: 1.2em;
  padding-bottom: 15px;
}

img {
  aspect-ratio: 1;
  width: 100%;
  max-width: 250px;
  margin: 0;
}

ion-card-header {
  align-items: center;
  width: 100%;
}

ion-card-subtitle {
  color: var(--card-color-subtitle);
}

ion-card-subtitle::first-letter,
.currentDate::first-letter {
  text-transform: capitalize;
}

.copyright {
  font-size: 0.7em;
  padding: 2px 0;
  position: fixed;
  bottom: 0;
  color: rgb(100, 100, 100);
  right: 10px;
}

.card-bottom {
  margin: 0;
}
</style>
