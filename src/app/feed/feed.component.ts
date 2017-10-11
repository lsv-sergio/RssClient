import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Channel } from "../Core/Entities/channel.entitity";
import { Feed } from "../Core/Entities/feed.entity";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    @Input() currentChannel: Channel;
    @Output() onFeedClicked = new EventEmitter<Feed>();

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

    ngOnInit() { }

    onFeedClick(event: Event) {
        event.preventDefault();
        event.cancelBubble = true;
        this.onFeedClicked.emit(this.currentFeed);
    }

}
