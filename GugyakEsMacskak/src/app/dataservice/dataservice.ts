import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimalModel } from '../animal.model';

@Injectable({
  providedIn: 'root',
})
export class Dataservice {
    constructor(private http:HttpClient) 
    { }

    getGugya(){
        return this.http.get<AnimalModel>('http://localhost:3000/api/GetGugya');
    }

    getMacska(){
        return this.http.get<AnimalModel>('http://localhost:3000/api/GetMacska');
    }
}
