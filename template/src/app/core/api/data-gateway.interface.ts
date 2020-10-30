import { Observable } from 'rxjs';

export abstract class DataGateway {
    getMessage: () => Observable<string>;
}