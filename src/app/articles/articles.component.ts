import { Component, OnInit, Input } from '@angular/core';
import { Feed } from "../Core/Entities/Feed.Entity";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

    currentFeed: Feed;

  constructor() { }

  ngOnInit() {
  }

}
