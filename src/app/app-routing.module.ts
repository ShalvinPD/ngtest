import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { GroupsComponent } from './groups/groups.component';


const routes: Routes = [
  { path: "contacts", component: ContactsComponent },
  { path: "groups", component: GroupsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
