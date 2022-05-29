import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users:Observable<any[]>;

    email:'';
    username:'';
    role:'';
  

  constructor(
    public firestore: AngularFirestore, public router:Router
  ) {
    this.users= this.firestore.collection('users').valueChanges();
   }

   addUser(){
     this.firestore.collection('users').add({
      email:this.email,
      username:this.username,
      role:this.role
     });
     this.email='';
     this.username='';
     this.role='';
     localStorage.setItem('email',this.email);
     this.router.navigateByUrl('/signup')
    }

  ngOnInit() {
  }

}
