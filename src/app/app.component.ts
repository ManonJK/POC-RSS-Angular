import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as xml2js from "xml2js";
import { NewsRss } from './news-rss';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  public rssData?: NewsRss;
  constructor(private http: HttpClient) {
    // this.rssData = {rss : {} as IRssObject };
  }
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://gadgets.ndtv.com/rss/feeds", requestOptions)
      // .get<any>("https://www.francetvinfo.fr/decouverte.rss", requestOptions)
      .subscribe(data => {
        //console.log(data);

        let parseString = xml2js.parseString;
        let parserOptions = { strict: true };
        parseString(data, parserOptions, (err:any, result: NewsRss) => {
          this.rssData = result;
          // console.error(err);
        });
      });
  }
}

export interface IRssData {}
