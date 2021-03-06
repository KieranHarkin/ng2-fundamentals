import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IEvent, ISession } from './event.model'
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EventService {

    constructor(private _http: Http) {}

    getEvents():Observable<IEvent[]> {
        return this._http.get('/api/events').map((response: Response) => {
          return <IEvent[]>response.json();
        }).catch(this.handleError);
    }

    getEvent(id:number):Observable<IEvent> {
        return this._http.get('/api/events/' + id).map((response: Response) => {
          return <IEvent>response.json();
        }).catch(this.handleError);
    }

    saveEvent(event): Observable<IEvent> {
      let headers = new Headers({ 'Content-Type':'application/json'});

      let options = new RequestOptions({headers: headers});

      return this._http.post('/api/events', JSON.stringify(event), options).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
    }


    searchSessions(searchTerm: string) {
      return this._http.get('/api/sessions/search?search=' + searchTerm).map((response: Response) => {
        return response.json();
      }).catch(this.handleError);
    }

    private handleError(error: Response) {
      return Observable.throw(error.statusText);
    }
}