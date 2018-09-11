import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { UserComponent } from './components/user/user.component';
import { OtpComponent } from './components/otp/otp.component';
import { AuthGuard } from './guards/auth.guard';

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