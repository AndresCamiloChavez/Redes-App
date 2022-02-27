import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Article } from '../core/models/Article';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articles: Article[] = [];

  constructor(private firestoreService: FirestoreService) {}
  ngOnInit(): void {
    this.firestoreService.getArticles().subscribe(data =>{
      console.log('Valores de firesotre ', data);
      this.articles = data;
    });
  }
}
