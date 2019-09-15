import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  
  newGroup: Group = new Group; 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.http.get<any[]>('http://localhost:3000/groups')
      .subscribe($ => this.groups = $); 
  }

  createGroup(): void {
    this.http.post<Group>('http://localhost:3000/groups', this.newGroup)
    .subscribe($ => this.getGroups());
  }
}
