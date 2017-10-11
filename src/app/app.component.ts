import { Component } from '@angular/core';
//import { Channel } from "./Core/Entities/channel.entitity";
import { FeedService } from "./Core/Services/Feed.Service";
import { Feed } from "./Core/Entities/feed.entity";
import { ArticleService } from "./Core/Services/article.service";
import { Article } from "./Core/Entities/article.entity";

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
    articles: Promise<Article[]>;

    constructor(private articleService: ArticleService) {}

    onFeedChanged(feed: Feed) {
        debugger;
        this.currentFeed = feed;
        if (feed) {
            this.loadArticlesByFeed(feed);
        }
    }
    loadArticlesByFeed(feed: Feed) {
        if (feed) {
            this.feeds = this.articleService.getArticlesByFeed(feed.Id);
        }
    }
}
