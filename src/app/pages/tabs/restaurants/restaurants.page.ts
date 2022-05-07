import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.page.html",
  styleUrls: ["./restaurants.page.scss"],
})
export class RestaurantsPage implements OnInit {
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
