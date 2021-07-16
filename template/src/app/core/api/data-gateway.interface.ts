import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const DATA_GATEWAY = new InjectionToken<DataGateway>('DataGateway');

export interface DataGateway {
    getMessage: () => Observable<string>;
}