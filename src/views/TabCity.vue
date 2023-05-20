<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col><ion-title class=" ion-text-left">Villes</ion-title></ion-col>
            <ion-col class="currentDate ion-text-right">{{ currentDate }}</ion-col>
          </ion-row>

        </ion-grid>

      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" class="ion-text-center">Villes</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid class="ion-padding">
          <ion-row class="ion-justify-content-center">
            <ion-accordion-group>
              <ion-accordion value="first" @click="getWeather('montreal')">
                <ion-item slot="header" class="slot-header">
                  <div class="roundedImage">
                    <img :src="imgSrc" alt="weather-icon" />
                  </div>
                  <ion-label>Montréal</ion-label>
                </ion-item>
                <ion-card slot="content">
                  <ion-grid class="weather-background">
                    <ion-row class="ion-justify-content-center"><img :src="imgSrc" /></ion-row>
                    <ion-row class="ion-justify-content-center">
                      <span class="city-name">{{ city }}, Québec</span>
                    </ion-row>
                  </ion-grid>
                  <ion-card-header>
                    <ion-card-subtitle class="ion-padding-top">{{ description }}</ion-card-subtitle>
                    <ion-card-title>{{ temp }}°C</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-grid>
                      <ion-row>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Ressenti</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ ressenti }}°C</p>
                          </ion-card-title>
                        </ion-col>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Vents</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ vents }} km/h</p>
                          </ion-card-title>
                        </ion-col>
                      </ion-row>
                      <ion-row>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Lever du soleil</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ lever }}</p>
                          </ion-card-title>
                        </ion-col>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Coucher du soleil</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ coucher }}</p>
                          </ion-card-title>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-card-content>
                </ion-card>
              </ion-accordion>
              <ion-accordion value="second" @click="getWeather('laval')">
                <ion-item slot="header" class="slot-header">
                  <div class="roundedImage">
                    <img :src="imgSrc" alt="weather-icon" />
                  </div>
                  <ion-label>Laval</ion-label>
                </ion-item>
                <ion-card slot="content">
                  <ion-grid class="weather-background">
                    <ion-row class="ion-justify-content-center"><img :src="imgSrc" /></ion-row>
                    <ion-row class="ion-justify-content-center">
                      <span class="city-name">{{ city }}, Québec</span>
                    </ion-row>
                  </ion-grid>
                  <ion-card-header>
                    <ion-card-subtitle class="ion-padding-top">{{ description }}</ion-card-subtitle>
                    <ion-card-title>{{ temp }}°C</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-grid>
                      <ion-row>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Ressenti</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ ressenti }}°C</p>
                          </ion-card-title>
                        </ion-col>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Vents</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ vents }} km/h</p>
                          </ion-card-title>
                        </ion-col>
                      </ion-row>
                      <ion-row>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Lever du soleil</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ lever }}</p>
                          </ion-card-title>
                        </ion-col>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Coucher du soleil</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ coucher }}</p>
                          </ion-card-title>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-card-content>
                </ion-card>
              </ion-accordion>
              <ion-accordion value="third" @click="getWeather('quebec')">
                <ion-item slot="header" class="slot-header">
                  <div class="roundedImage">
                    <img :src="imgSrc" alt="weather-icon" />
                  </div>
                  <ion-label>Québec</ion-label>
                </ion-item>
                <ion-card slot="content">
                  <ion-grid class="weather-background">
                    <ion-row class="ion-justify-content-center"><img :src="imgSrc" /></ion-row>
                    <ion-row class="ion-justify-content-center">
                      <span class="city-name">{{ city }}, Québec</span>
                    </ion-row>
                  </ion-grid>
                  <ion-card-header>
                    <ion-card-subtitle class="ion-padding-top">{{ description }}</ion-card-subtitle>
                    <ion-card-title>{{ temp }}°C</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-grid>
                      <ion-row>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Ressenti</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ ressenti }}°C</p>
                          </ion-card-title>
                        </ion-col>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Vents</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ vents }} km/h</p>
                          </ion-card-title>
                        </ion-col>
                      </ion-row>
                      <ion-row>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Lever du soleil</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ lever }}</p>
                          </ion-card-title>
                        </ion-col>
                        <ion-col class="ion-text-center">
                          <ion-card-subtitle>Coucher du soleil</ion-card-subtitle>
                          <ion-card-title>
                            <p>{{ coucher }}</p>
                          </ion-card-title>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-card-content>
                </ion-card>
              </ion-accordion>
            </ion-accordion-group>
          </ion-row>
        </ion-grid>
        <span class="copyright">© Lilian Magalhaes & Anayika Pauyo</span>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { fetchCityWeather } from '@/services/weather_service';

export default defineComponent({
  components: {
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonImg,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol
  },
  mounted() {
    this.currentDate = new Date().toLocaleDateString('fr-CA', {
      weekday: 'long', month: 'long', year: 'numeric', day: 'numeric',
    });
    this.getWeather('montreal')
  },
  data() {
    return {
      temp: 0,
      city: '',
      description: '',
      imgSrc: '',
      ressenti: '',
      vents: '',
      lever: '',
      coucher: '',
      currentDate: '',
    }
  },
  methods: {
    async getWeather(ville: string) {
      let weather = await fetchCityWeather(ville);

      this.temp = weather.main.temp.toFixed();
      this.city = weather.name;
      this.description = weather.weather[0].description;
      this.ressenti = weather.main.feels_like.toFixed();
      this.vents = weather.wind.speed;
      this.lever = new Date(weather.sys.sunrise * 1000).toLocaleTimeString('fr-CA', { timeStyle: 'short' });
      this.coucher = new Date(weather.sys.sunset * 1000).toLocaleTimeString('fr-CA', { timeStyle: 'short' });
      this.imgSrc = `src/assets/icons/${weather.weather[0].icon}.png`;
    }
  }
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
  font-size: .9em;
}

ion-card {
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-width: 210px;
  --background: var(--color-card);
}

.weather-background {
  justify-content: center;
  align-items: center;
  background-color: rgba(63, 127, 152, 0.8);
  border-radius: 5px;
  width: 100%;
}

ion-content {
  --background: url('src/assets/images/background-morning.jpeg') no-repeat center/cover fixed;
}

ion-accordion.accordion-collapsed,
ion-accordion.accordion-collapsing,
ion-accordion.accordion-expanding,
ion-accordion.accordion-expanded {
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  margin: 0;
}

ion-accordion.accordion-collapsing ion-item[slot='header'],
ion-accordion.accordion-collapsed ion-item[slot='header'] {
  --background: var(--color-card);
  --color: var(--ion-color-light-contrast);
}

ion-accordion.accordion-expanding ion-item[slot='header'],
ion-accordion.accordion-expanded ion-item[slot='header'] {
  --background: rgba(14, 27, 85, 0.568);
  --color: var(--ion-color-primary-contrast);
}

ion-accordion-group {
  --background: rgba(255, 255, 255, 0);
  max-width: 400px;
  min-width: 210px;
  width: 100%;
}

ion-card-header {
  padding-top: 0;
  align-items: center;
  width: 100%;

}

* {
  font-family: Arial, Helvetica, sans-serif;
}

img {
  aspect-ratio: 1;
  width: 100%;
  max-width: 250px;
  margin: 0;
}

ion-card-subtitle {
  color: var(--card-color-subtitle);
}

ion-card-subtitle::first-letter,
.currentDate::first-letter {
  text-transform: capitalize;
}

span {
  color: var(--card-city-color);
  font-size: 1.2em;
  padding-bottom: 15px;
}

.copyright {
  font-size: .7em;
  padding: 2px 0;
  position: fixed;
  bottom: 0;
  color: rgb(100, 100, 100);
  right: 10px;
}

.roundedImage {
  background-color: rgba(63, 127, 152, 0.7);
  border-radius: 50%;
  display: inline-block;
  height: 33px;
  margin-right: 10px;
  overflow: hidden;
  position: relative;
  width: 33px;
  padding: 6px;
}

.roundedImage img {
  height: 100%;
  width: auto;

}
</style>