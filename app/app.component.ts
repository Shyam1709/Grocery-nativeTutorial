import { Component } from "@angular/core";

@Component({
	selector: "my-app",
	template: `
	<StackLayout>
	// <Label text='hello world'></Label>
	<TextField hint="Email Address" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
	<TextField hint="Password" secure="true"></TextField>
	<Button text="sign in"></Button>
	<Button text="sign up for Groceries"></Button>
	</StackLayout>
	`
})
export class AppComponent {}