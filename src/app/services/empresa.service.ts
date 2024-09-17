import { Injectable } from '@angular/core';
import { Wrapper } from '../models/wrapper';
import { lastValueFrom } from 'rxjs';
import config from '../../assets/configs/config.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  baseUrl:string = config.baseUrl;
  constructor(private http:HttpClient) { }

  public async ObtenirEmpreses():Promise<Wrapper>{
    
    return await lastValueFrom(this.http.get<Wrapper>(`${this.baseUrl}/Empresa`))
  }
}
