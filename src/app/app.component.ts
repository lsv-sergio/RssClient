import { Component, OnDestroy } from '@angular/core';
//import { Channel } from "./Core/Entities/channel.entitity";
import { FeedService } from "./Core/Services/Feed.Service";
import { Feed } from "./Core/Entities/feed.entity";
import { ArticleService } from "./Core/Services/article.service";
import { Article } from "./Core/Entities/article.entity";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})
export class AppComponent {

    title = 'app';
    //currentChannel: Channel;
    currentFeed: Feed;
    feeds: Promise<Feed[]>;
    articles: Article[];

    constructor(private articleService: ArticleService) { }

    onFeedChanged(feed: Feed) {
        this.currentFeed = feed;
        if (feed) {
            this.loadArticlesByFeed(feed);
        }
    }
    loadArticlesByFeed(feed: Feed) {
        if (feed) {
            this.articleService
                .getArticlesByFeed(feed.Id)
                .subscribe(articles => this.articles = articles);
        }
    }
    OnDestroy() {
    }
}
