import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { WebApiRouteBuilder } from "./WebApiRouteBuilder";
import { BaseService } from "./Base.Service";
import { Channel } from "../Entities/Channel.Entitity";

@Injectable()
export class ChannelService extends BaseService {

    getChannelsByUser(userId: number): Promise<Channel[]> {
        if (userId == null) {
            return null;
        }
        return this.http
            .get(
            this.webApiRouteBuilder.buildChannelAllEntitiesUrl() + "/" + userId)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError)
    }
    constructor(private http: Http, private webApiRouteBuilder: WebApiRouteBuilder) {
        super();
    }
}
