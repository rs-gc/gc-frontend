import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { UserComponent } from './user/user.component';
import { OtpComponent } from './otp/otp.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path:  '', redirectTo:  'items', pathMatch:  'full' },
    {
        path:  'items',
        component:  ItemsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/mobile',
        component: UserComponent
    },
    {
        path: 'user/otp',
        component: OtpComponent
    },
    // {
    //     path: 'items/others', 
    //     component: OtherComponent,
    //     canActivate: [AuthGuard]
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }