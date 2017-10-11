import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Channel } from "../Core/Entities/channel.entitity";
import { Headers, Http, Response } from '@angular/http';
import { ChannelService } from "../Core/Services/cnannel.service";
import { Feed } from "../Core/Entities/feed.entity";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
  providers: [ChannelService]
})
export class ChannelsComponent implements OnInit {

    isGroupOpen: Boolean = false;
    public channels: Promise<Channel[]>;
    private userId: number = 1;
    private currentChannel: Channel;
    @Output() onFeedChanged = new EventEmitter<Channel|Feed>();
    constructor(private channelService: ChannelService) { }
    ngOnInit() {
        this.channels = this.channelService.getChannelsByUser(this.userId);
        //this.channels.then(channels => { this.onAllChannelsChanged(channels); })
    }
    //onAllChannelsChanged(channels: Channel[]) {
    //    if (channels.length > 0) {
    //        this.currentChannel = channels[0];
    //    }
    //    else {
    //        this.currentChannel = null;
    //    }
    //    this.changeChannel(this.currentChannel);
    //}
    //changeChannel(channel: Channel) {
    //    this.reloadArticles.emit(channel);
    //}
    onFeedClick(feed: Feed) {
        debugger;
        this.onFeedChanged.emit(feed);
    }
}
