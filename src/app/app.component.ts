import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'ngx-simple-rich-text-editor';

	output(event: string) {
		console.log(event);
	}
}
