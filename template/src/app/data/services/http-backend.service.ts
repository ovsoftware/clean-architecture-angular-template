import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataGateway } from 'src/app/core/api/data-gateway.interface';

@Injectable({
    providedIn: 'root'
})
export class HttpBackendService implements DataGateway {
    getMessage(): Observable<string> {
        return of('Hello Message');
    }

}