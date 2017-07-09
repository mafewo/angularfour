import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyBrl4HWPPQ-V_I57VC99CQXX9dboKMEBJI';

@Injectable()
export class YoutubeService {
  public status: BehaviorSubject<{}> = new BehaviorSubject<{}>(false);

  constructor(public _http: Http) {
   }

  search(query: string) {
    const busqueda = this._http.get(`${BASE_URL}?q=${query}&part=snippet&key=${API_TOKEN}&maxResults=50`)
      .map((res: Response) => res.json())
      .map(json => json.items);
    busqueda.subscribe( (res) =>
      this.status.next(res)
    )
  }
}
