import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonButton}  from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-or-update-empresa',
  templateUrl: './add-or-update-empresa.component.html',
  styleUrls: ['./add-or-update-empresa.component.scss'],
  imports: [IonContent, IonInput, IonButton],
  standalone:true,
})
export class AddOrUpdateEmpresaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
