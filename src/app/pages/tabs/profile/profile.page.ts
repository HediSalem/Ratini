import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  constructor(private router: Router) {}
  allerRestaurant() {
    this.router.navigateByUrl("/tabs/restaurants");
  }
  allerProfile() {
    this.router.navigateByUrl("/tabs/profile");
  }
  allerFavourite() {
    this.router.navigateByUrl("/tabs/favourite");
  }

  ngOnInit() {}
}
