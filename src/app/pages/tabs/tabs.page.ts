import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  constructor(private router: Router) {}
  allerRestaurant() {
    this.router.navigateByUrl("/tabs/restaurants");
  }
  allerProfile() {
    this.router.navigateByUrl("/tabs/profile");
  }

  ngOnInit() {}
}
