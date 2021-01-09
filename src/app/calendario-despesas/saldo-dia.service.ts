import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaldoDiaService {

  url = 'http://localhost:8080/saldo-dias';

  constructor(
    private httpClient: HttpClient
  ) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  getTodos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  save(saldoDia: any): Observable<any> {
    return this.httpClient.post<any>(this.url, JSON.stringify(saldoDia), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  saveLote(lote: []): Observable<any> {
    return this.httpClient.post<any>(this.url+'/lote', JSON.stringify(lote), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }
  update(saldoDia: any): Observable<any> {
    return this.httpClient.put<any>(this.url, JSON.stringify(saldoDia), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  delete(saldoDia: any) {
    return this.httpClient.delete<any>(this.url + '/' + saldoDia.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(ex: HttpErrorResponse) {
    console.log('erro', ex.error);
    return throwError(ex.error);
  };
}
