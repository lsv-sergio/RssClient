import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import { Feed } from "../Entities/feed.entity";
import { BaseService } from "./base.service";
import { WebApiRouteBuilder } from "./webapi-route-builder";
import { Article } from "../Entities/article.entity";

@Injectable()
export class ArticleService extends BaseService {

    getArticlesByChannel(channelId: number): Promise<Article[]> {
        if (channelId == null) {
            return null;
        }
        return this.http
            .get(
            this.webApiRouteBuilder.buildArticleByChannelEntitiesUrl() + "/" + channelId)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError)
    }
    getArticlesByFeed(feedId: number): Promise<Article[]> {
        if (feedId == null) {
            return null;
        }
        return this.http
            .get(
            this.webApiRouteBuilder.buildArticleByFeedEntitiesUrl() + "/" + feedId)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError)
    }
    constructor(private http: Http, private webApiRouteBuilder: WebApiRouteBuilder) {
        super();
    }
}
