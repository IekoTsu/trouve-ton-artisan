import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:3000/send-email';

  constructor(private http: HttpClient) { }

  sendEmail(emailData: {name:string, from: string, to: string, subject: string, body: string }): Observable<any> {
    return this.http.post(this.apiUrl, emailData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';

    console.log("service" ,error)

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code.
      // Error body should contain the error message
    if (error.error && error.error.message) {
      errorMessage = `${error.error.message}`;
    } else {
      errorMessage = `Server Error: ${error.status}\nMessage: ${error.message}`;
    }
    }
    return throwError(() => new Error(errorMessage));
  }
}
