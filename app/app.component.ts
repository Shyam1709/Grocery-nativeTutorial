import { Component } from "@angular/core";
import { User } from "./shared/user/user";
import { UserService } from "./shared/user/user.service";

@Component({
	selector: "my-app",
	template: `
	<StackLayout>
	<Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
	<TextField hint="Email Address" keyboardType="email" autocorrect="false" [(ngModel)]="email" autocapitalizationType="none"></TextField>
	<TextField hint="Password" secure="true"></TextField>
	<Button [text]="isLoggingIn ? 'Sign in' : 'Sign up'" class="submit-button" (tap)="submit()"></Button>
	<Button [text]="isLoggingIn ? 'Sign up' : 'Back to login'" (tap)="toggleDisplay()"></Button>
	</StackLayout>
	`,
	styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
	providers: [UserService]
})
export class AppComponent {
	user : User;
	email = "Developersrocks@kls.com";
	isLoggingIn=true;

 constructor() {
    this.user = new User();
  }


	submit(){
		alert("you are using" + this.email);
	//console.log("Hello");
}
toggleDisplay(){
	this.isLoggingIn= !this.isLoggingIn;
}
}