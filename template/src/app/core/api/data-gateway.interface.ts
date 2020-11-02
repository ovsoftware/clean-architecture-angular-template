import { Observable } from 'rxjs';

// use abstract class instead of interface for dependency injection
export abstract class DataGateway {
    getMessage: () => Observable<string>;
}