import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { UtilsGeneralsService } from '../services/utils-generals.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent,ToastModule],
})
export class HomePage {
  imageUrl: string | null = null; // Variable per emmagatzemar la imatge
  plataforma:string = "";
  constructor(private utilsGenerals:UtilsGeneralsService, private messageService:MessageService) {}

  ngOnInit(): void {   
    this.plataforma = this.utilsGenerals.ComprovarPlataforma();
    console.log(this.plataforma);

    this.messageService.add({ severity: 'success', summary: 'Success', detail: this.plataforma, life: 3000 });
  
  }

  async ObrirCamara()
  {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri, // O CameraResultType.Base64
      });

      this.imageUrl = image.webPath; // Guardar la ruta de la imatge
    } catch (error) {
      console.error('Error obrin la càmera: ', error);
    }

  }
}
