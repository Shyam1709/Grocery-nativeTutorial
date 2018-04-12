import { Component } from "@angular/core";
import { User } from "./shared/user/user";
import { UserService } from "./shared/user/user.service";



@Component({
	selector: "app-main",
	template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent {
	
}