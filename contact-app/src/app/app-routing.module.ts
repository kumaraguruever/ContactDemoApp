import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactlistComponent} from './contactlist/contactlist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contactlist' },
  { path: 'contactlist', component: ContactlistComponent},
  { path: 'contactform', component: ContactformComponent }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
