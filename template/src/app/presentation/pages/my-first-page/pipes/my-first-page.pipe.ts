import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'myFirstPage'
})
export class MyFirstPagePipe implements PipeTransform {

	transform(value: unknown, ...args: unknown[]): unknown {
		return null;
	}

}
