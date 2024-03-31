import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Pincode } from '@annuadvent/ngx-core/helpers-ecommerce';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PincodeValidatorService implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const id = control.value;

    return this.http.get(`/api/addresses/pincode/${id}`).pipe(
      map((pincode) => {
        const city = control.parent.get('city');
        const state = control.parent.get('state');
        city.setValue((pincode as Pincode).city);
        state.setValue((pincode as Pincode).state);
        return null;
      }),
      catchError((error) => {
        const formError: ValidationErrors = {
          pincode: {
            message: 'Pincode does not exist',
          },
        };

        return of(formError);
      })
    );
  }
}
