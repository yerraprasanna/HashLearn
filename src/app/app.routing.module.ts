import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { CoursesComponent } from "./courses/courses.component";
import { MywishlistComponent } from "./mywishlist/mywishlist.component";
import { ProfileComponent } from "./profile/profile.component";


const routes:Routes =[
  {path:'courses',component:CoursesComponent},
  {path:'wishlist',component:MywishlistComponent},
  {path:'profile',component:ProfileComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents=[CoursesComponent,MywishlistComponent,ProfileComponent,CartComponent];
