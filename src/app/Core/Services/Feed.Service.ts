import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Feed } from "../Entities/Feed.Entity";
import { WebApiRouteBuilder } from "./WebApiRouteBuilder";
import { BaseService } from "./Base.Service";

@Injectable()
export class FeedService extends BaseService {

    getFeedsByChannel(channelId: number): Promise<Feed[]> {
        if (channelId == null) {
            return null;
        }
        return this.http
            .get(
            this.webApiRouteBuilder.buildFeedByChannelEntitiesUrl() + "/" + channelId)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError)
    }
    constructor(private http: Http, private webApiRouteBuilder: WebApiRouteBuilder) {
        super();
 }



}
