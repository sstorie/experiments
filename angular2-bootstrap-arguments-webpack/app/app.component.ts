import { Component} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
	selector: 'my-app',
	template: `
		<h1>Angular is now running</h1>
		<div>Please check the console log to see the externally provided API config</div>
	`,
	providers: [ApiService]
})
export class AppComponent { 
	// Just inject the ApiService so the class is instantiated
	//
	constructor(private apiService: ApiService) {}
}