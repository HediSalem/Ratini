import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../home/home.module").then((m) => m.HomePageModule),
          },
        ],
      },
    ],
  },

  {
    path: "",
    redirectTo: "restaurants",
    pathMatch: "full",
  },
  {
    path: "restaurants",
    loadChildren: () =>
      import("./restaurants/restaurants.module").then(
        (m) => m.RestaurantsPageModule
      ),
  },  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./favourite/favourite.module').then( m => m.FavouritePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
