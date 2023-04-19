import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../contact";

@Injectable({
  providedIn: 'root'
})
export class PorfolioService  {

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('https://smohan.pythonanywhere.com/user/');
  }
  getResumeDownload(): Observable<Blob> { // Specify response type as Blob
    return this.http.get('https://smohan.pythonanywhere.com/resume/', { responseType: 'blob' });
  }

  getProjectDetail(id:any): Observable<any> {
    return this.http.get('https://smohan.pythonanywhere.com/project/'+id+'/');
  }

  sendContactInfo(contact: Contact): Observable<any> {
    return this.http.post('https://smohan.pythonanywhere.com/contact/', contact);
  }

}
