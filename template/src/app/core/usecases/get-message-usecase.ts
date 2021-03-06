import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataGateway } from '../api/data-gateway.interface';
import { Message } from '../entities/message';
import { DATA_GATEWAY } from '../api/data-gateway.interface';

@Injectable({
	providedIn: 'root'
})
export class GetMessageUsecase {

	constructor(@Inject(DATA_GATEWAY) private dataGateway: DataGateway) {}

	exec(): Observable<Message> {
		return this.dataGateway.getMessage()
			.pipe(
				map(m => {
					return {
						content: m
					};
				})
			);
	}
}