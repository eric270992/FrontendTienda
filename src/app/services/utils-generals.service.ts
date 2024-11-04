import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsGeneralsService {

  constructor() { }

  public ComprovarPlataforma():string{
    var plataforma:string = "web";

    if (Capacitor.getPlatform() === 'android') {
      plataforma = "android";
    } else if (Capacitor.getPlatform() === 'ios') {
      plataforma = "ios"
    }

    return plataforma;
  }
}
