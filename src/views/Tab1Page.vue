<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Galeria de fotos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Pagina aleatoria</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col size="4" :key="photo" v-for="photo in photos">
            <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
                </ion-col>
              </ion-row>
            </ion-grid>
      
            <ion-fab vertical="bottom" horizontal="center" slot="fixed">
              <ion-fab-button>
                <ion-icon :icon="camera" @click="takePhoto()"></ion-icon>
              </ion-fab-button>
              </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { actionSheetController, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '@/composable/usePhotoGallery';

export default defineComponent({
  name: 'Tab1Page',
  components: { IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },

  setup() {
    const showActionSheet = async (photo: UserPhoto) => {
      const actionSheet = await actionSheetController.create({
        header: 'Photos',
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              deletePhoto(photo);
            },
          },
          {
            text: 'Cancel',
            icon: close,
            role: 'cancel',
            handler: () => {
              // Não vai ser feito nada aqui
            },
          },
        ],
      });
      await actionSheet.present();
    };
    const { takePhoto, photos, deletePhoto } = usePhotoGallery();
    return {
      showActionSheet,
      takePhoto,
      deletePhoto,
      photos,
      camera, trash, close
    }
  }
});
</script>

<style>
.meuElemento {
  text-align: center;
  background-color: #083621;
  color: aliceblue;

}

h1 {
  text-align: right;
  padding-right: 2em;
}
</style>