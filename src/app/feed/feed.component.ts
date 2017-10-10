import { Component, OnInit, Input } from '@angular/core';
import { Channel } from "../Core/Entities/Channel.Entitity";
import { Feed } from "../Core/Entities/Feed.Entity";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    @Input() currentChannel: Channel;

    private _currentFeed: Feed;
    get currentFeed(): Feed {
        return this._currentFeed;
    }
    @Input("currentFeed")
    set currentFeed(value: Feed) {
        this._currentFeed = value;
        if (value) {
           // this.loadArticles();
        }
    }

    constructor() { }

  ngOnInit() {
  }

}
