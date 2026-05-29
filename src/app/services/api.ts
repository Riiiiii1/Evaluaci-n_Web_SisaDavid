import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
export interface Country {
  flags: Flags;
  name: Name;
  capital: string[];
}
export interface Flags {
  png: string;
  svg: string;
  alt: string;
}
export interface Name {
  common: string;
  official: string;
  nativeName: Record<string, NativeName>;
}
export interface NativeName {
  official: string;
  common: string;
}
@Injectable({
  providedIn: 'root',
})
export class Api {
    private apiUrl = environment.apiUrl;


    

  constructor(private http: HttpClient) {}
  
  getItems(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/all?fields=name,capital,flags`);
  }
}
