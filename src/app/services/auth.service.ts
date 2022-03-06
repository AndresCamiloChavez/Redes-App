import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../core/models/User';
import { Entities } from '../core/entities';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firestore: FirestoreService) { }

  createUser(user: User){
    return this.firestore.createDoc<User>(user, Entities.users);
  }
}
