import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: "root"
})
export class AppService {

  private url = 'path/to/mt/service';

  constructor(private http: HttpClient) {}

  getList(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
