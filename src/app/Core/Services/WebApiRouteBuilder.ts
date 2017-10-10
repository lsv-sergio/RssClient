import {Injectable} from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class WebApiRouteBuilder {
    private _apiPrefix: string = 'api';

    public buildChannelAllEntitiesUrl(): string {
        let urlArray: string[] = new Array();
        urlArray.push(environment.backEndUrlAddress);
        urlArray.push(this._apiPrefix);
        urlArray.push("channel");
        urlArray.push("GetByUser");
        return urlArray.join("/");
    }
    public buildFeedByChannelEntitiesUrl(): string {
        let urlArray: string[] = new Array();
        urlArray.push(environment.backEndUrlAddress);
        urlArray.push(this._apiPrefix);
        urlArray.push("feed");
        urlArray.push("GetByChannel");
        return urlArray.join("/");
    }}
