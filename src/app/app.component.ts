import { Component } from '@angular/core';
import { Channel } from "./Core/Entities/Channel.Entitity";
import { FeedService } from "./Core/Services/Feed.Service";
import { Feed } from "./Core/Entities/Feed.Entity";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeedService]
})
export class AppComponent {

    title = 'app';
    currentChannel: Channel;
    feeds: Promise<Feed[]>;

    constructor(private feedService: FeedService) {}

    onChannelChanged(channel: Channel) {
        this.currentChannel = channel;
        if (channel) {
            this.loadFeedsByChannel(channel);
        }
    }
    loadFeedsByChannel(channel: Channel) {
        if (channel) {
            this.feeds = this.feedService.getFeedsByChannel(channel.Id);
        }
    }
}
