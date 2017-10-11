import { Component, OnInit, Input } from '@angular/core';
import { Article } from "../Core/Entities/article.entity";

@Component({
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

   @Input()currentArticle: Article;

  constructor() { }

  ngOnInit() {
  }

}
