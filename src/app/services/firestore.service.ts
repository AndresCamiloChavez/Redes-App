import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Entities } from '../core/entities';
import { Article } from '../core/models/Article';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  getArticles() {
    console.log('valor de la entidad',Entities.articles);
    return this.firestore.collection<Article>(Entities.articles).valueChanges();
  }
}
