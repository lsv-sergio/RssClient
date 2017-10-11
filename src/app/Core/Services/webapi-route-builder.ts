import {Injectable} from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class WebApiRouteBuilder {
    private _apiPrefix: string = 'api';

    private buildBaseUrl(): Array<string> {
        let urlArray: string[] = new Array();
        urlArray.push(environment.backEndUrlAddress);
        urlArray.push(this._apiPrefix);
        return urlArray;
    }
    public buildChannelAllEntitiesUrl(): string {
        let urlArray: Array<string> = this.buildBaseUrl();
        urlArray.push("channel");
        urlArray.push("GetByUser");
        return urlArray.join("/");
    }
    public buildFeedByChannelEntitiesUrl(): string {
        let urlArray: Array<string> = this.buildBaseUrl();
        urlArray.push("feed");
        urlArray.push("GetByChannel");
        return urlArray.join("/");
    }
    public buildArticleByFeedEntitiesUrl(): string {
        let urlArray: Array<string> = this.buildBaseUrl();
        urlArray.push("article");
        urlArray.push("GetByFeed");
        return urlArray.join("/");
    }
    public buildArticleByChannelEntitiesUrl(): string {
        let urlArray: Array<string> = this.buildBaseUrl();
        urlArray.push("article");
        urlArray.push("GetByChannel");
        return urlArray.join("/");
    }
}
