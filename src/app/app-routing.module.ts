import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/common/main/main-page.component";
import {CheckConnectionComponent} from "./pages/common/check-connection/check-connection.component";
import {EmptyUserLkComponent} from "./pages/client/lk/empty/empty-user-lk.component";
import {CompletedUserLkComponent} from "./pages/client/lk/completed/completed-user-lk.component";
import {EmptyDoctorLkComponent} from "./pages/doctor/lk/empty/empty-doctor-lk.component";
import {CompletedDoctorLkComponent} from "./pages/doctor/lk/completed/completed-doctor-lk.component";
import {FavouriteSpecComponent} from "./pages/client/favourite/favourite-spec.component";

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'check-connection',
    component: CheckConnectionComponent
  },
  {
    path: 'client/lk/empty',
    component: EmptyUserLkComponent
  },
  {
    path: 'client/lk/completed',
    component: CompletedUserLkComponent
  },
  {
    path: 'client/favourites',
    component: FavouriteSpecComponent
  },
  {
    path: 'doctor/lk/empty',
    component: EmptyDoctorLkComponent
  },
  {
    path: 'doctor/lk/completed',
    component: CompletedDoctorLkComponent
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
