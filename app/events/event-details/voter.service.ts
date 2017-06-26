import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ISession } from "../shared/index";

@Injectable()
export class VoterService {

    constructor(private _http: Http){}

    deleteVoter(eventId: number, session: ISession, userName: string) {

        session.voters = session.voters.filter((voter) => voter !== userName);

        let url = `api/events/${eventId}/sessions/${session.id}/voters/${userName}`;

        this._http.delete(url).catch(this.handleError).subscribe();
    }

    addVoter(eventId: number, session: ISession, userName: string) {

        let headers = new Headers({
            "ContentType":"application/json"
        });
        let options = new RequestOptions({headers: headers});

        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;

        this._http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();


        session.voters.push(userName);
    }

    userHasVoted(session: ISession, userName: string) {
        return session.voters.some(voter => voter === userName);
    }

    private handleError(error: Response) {
      return Observable.throw(error.statusText);
    }
}
