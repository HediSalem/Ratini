import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: string = "";
  pass: string = "";

  constructor(private router: Router, private auth: AngularFireAuth) {}

  verif() {
    this.auth
      .signInWithEmailAndPassword(this.email, this.pass)
      .then((data) => {
        this.router.navigateByUrl("/tabs/restaurants");
      })
      .catch();
    (err) => {
      console.log(err);
    };
  }

  ngOnInit() {}

  // navigateToLoginPage() {
  //   this.router.navigate(["tabs"]);
  // }
}
