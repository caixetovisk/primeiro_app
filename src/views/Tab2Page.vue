<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mapas</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="map"></div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { meuMapa } from '@/composable/maps';

export default defineComponent({
  name: 'Tab2Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  ionViewDidEnter() {
    console.log('Entrou na páginas');
  },
  ionViewDidLeave() {

    console.log('Saiu da página');
  },
  ionViewWillEnter() {
   const {pegarCoordenadas} = meuMapa();
   pegarCoordenadas();
    console.log('Vai entrar na página');
  },
  ionViewWillLeave() {
    console.log('Vai sair da página');
  },
});
</script>
