import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs';
import { fromEventPattern } from 'rxjs';

export class Employees {
  constructor(
    public empID: number,
    public name: string,
    public  salary: number
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(
    private httpClient: HttpClient
  ) {
  }
  BaseUrl = 'http://localhost:8080/crud-0.0.1-SNAPSHOT';
  headers = new Headers({'Content-Type': 'application/json'});
  getEmployees(): Observable<any> {
    console.log('test call');
    return this.httpClient.get(this.BaseUrl + '/read_all');


  }
  addEmployees(details: any): Observable<any> {
   /* let body = JSON.stringify(details);
    console.log(body);*/
    /*let headers = new Headers({'Content-Type': 'application/json'});
    let options = { headers : headers };*/
    return this.httpClient.post(this.BaseUrl + '/create', details);
  }
  deleteEmployees(id: any): Observable<any> {

    return this.httpClient.delete<any>(this.BaseUrl + '/delete/' + id);
  }
  public updateEmployees(details: any): Observable<any> {

    return this.httpClient.put(this.BaseUrl + '/update', details);

  }



}
