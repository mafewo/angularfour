import { Injectable } from '@angular/core';
 import { Http, Response} from '@angular/http';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'VC99CQXX9dboKMEBJIAIzaSyBrl4HWPPQ-V_I57';

@Injectable()
export class YoutubeService {

  constructor(public _http: Http) { }

  search(query) {
    return this._http.get(`${BASE_URL}?q=${query}&part=snippet&key=${API_TOKEN}&maxResults=50`)
    .map((res: Response) => res.json())
    .map(json => json.items);
  }
}
