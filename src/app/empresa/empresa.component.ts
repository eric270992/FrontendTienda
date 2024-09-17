import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonButton, IonIcon, IonRow, IonGrid } from '@ionic/angular/standalone';
import { EmpresaService } from '../services/empresa.service';
import { Empresa } from '../models/empresa';
import { Wrapper } from '../models/wrapper';
import { Table, TableModule } from 'primeng/table';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers:[TableModule],
  imports: [IonGrid, IonRow, IonContent, IonInput, IonButton, IonIcon, TableModule],
  standalone: true
})
export class EmpresaComponent implements OnInit {

  llistaEmpreses: Empresa[] = [];
  constructor(private empresaService: EmpresaService) { }

  async ngOnInit() {
    await this.ObtenirEmpreses();
  }

  async ObtenirEmpreses() {

    try {
      let wrapper = await this.empresaService.ObtenirEmpreses();
      if (wrapper.data != undefined && wrapper.data != null) {
        this.llistaEmpreses = wrapper.data["Empreses"];
      }

      console.log(this.llistaEmpreses);
    }
    catch (error) {
      console.log(error);
    }
  }

}
