import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { ChannelsComponent } from './channels/channels.component';
import { WebApiRouteBuilder } from "./Core/Services/webapi-route-builder";
import { ArticlesComponent } from './articles/articles.component';
import { FeedComponent } from './feed/feed.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { AccordionGroupComponent } from './shared/accordion-group/accordion-group.component';

@NgModule({
    declarations: [
        AppComponent,
        ChannelsComponent,
        ArticlesComponent,
        FeedComponent,
        AccordionComponent,
        AccordionGroupComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [WebApiRouteBuilder],
    bootstrap: [AppComponent]
})
export class AppModule { }
