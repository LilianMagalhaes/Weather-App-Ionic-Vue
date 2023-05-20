<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="position" href="/position">
          <ion-icon aria-hidden="true" :icon="locationOutline" />
          <ion-label>Position actuelle</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="villes" href="/villes">
          <ion-icon aria-hidden="true" :icon="businessOutline" />
          <ion-label>Villes</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonTitle, IonToolbar, IonHeader } from '@ionic/vue';
import { businessOutline, globeOutline, listOutline, locationOutline } from 'ionicons/icons';
</script>

<style scoped></style>
