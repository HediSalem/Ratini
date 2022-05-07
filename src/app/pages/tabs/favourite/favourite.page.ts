import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-favourite",
  templateUrl: "./favourite.page.html",
  styleUrls: ["./favourite.page.scss"],
})
export class FavouritePage implements OnInit {
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
