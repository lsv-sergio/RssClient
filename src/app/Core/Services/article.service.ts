import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { BaseService } from "./base.service";
import { WebApiRouteBuilder } from "./webapi-route-builder";
import { Article } from "../Entities/article.entity";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ArticleService extends BaseService {

    getArticlesByFeed(feedId: number): Observable<Article[]> {
        return this.http
            .get(
            this.webApiRouteBuilder.buildArticleByFeedEntitiesUrl() + "/" + feedId)
            .map(response => response.json() as Article[]);
    }
    constructor(private http: Http, private webApiRouteBuilder: WebApiRouteBuilder) {
        super();
    }
}
