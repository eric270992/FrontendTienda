import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { UtilsGeneralsService } from '../services/utils-generals.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Camera, CameraResultType } from '@capacitor/camera';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

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

  async scanBarcode() {
    // Sol·licitar permisos de càmera
    const permission = await BarcodeScanner.requestPermissions();
    if (permission.camera === 'granted') {
      // Iniciar l'escàner de codis de barres
      const result = await BarcodeScanner.scan();
  
      // Comprovar que hi hagi codis llegits
      if (result.barcodes && result.barcodes.length > 0) {
        // Accedir al primer codi llegit
        const barcode = result.barcodes[0]; // Aquí accedim correctament al primer element
        console.log('Codi llegit:', barcode.displayValue); // Mostrar el valor llegit
        this.messageService.add({ severity: 'success', summary: 'Success', detail: barcode.displayValue, life: 3000 });
        // Aquí pots fer el que necessitis amb el codi llegit
      } else {
        console.log('No s\'han llegit codis de barres.');
      }
    } else {
      console.log('Permís de càmera denegat');
    }
  }
  
}
