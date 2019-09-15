import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../contact';
import { Group } from '../group';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any;
  groups: Group[];

  newContact: Contact = new Contact;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getContacts();
    this.getGroups();
  }

  getContacts() {
    this.http.get('http://localhost:3000/contacts?_expand=group')
      .subscribe(($: any[]) => {
        this.contacts = $.map(con => ({
          id: con.id,
          groupId: con.groupId,
          name: con.name,
          phone: con.phone,
          groupName: con.group.name
        }))
      }) 
  }

  getGroups() {
    this.http.get<any[]>('http://localhost:3000/groups')
      .subscribe($ => this.groups = $); 
  }
}