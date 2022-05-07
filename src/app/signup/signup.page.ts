import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  email: string = "";
  pass: string = "";
  constructor(private router: Router, private auth: AngularFireAuth) {}

  ngOnInit() {}
  inscrire() {
    this.auth
      .createUserWithEmailAndPassword(this.email, this.pass)
      .then((data) => {
        this.router.navigateByUrl("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // signUPUser() {
  //   this.router.navigate(["login"]);
  // }
}
