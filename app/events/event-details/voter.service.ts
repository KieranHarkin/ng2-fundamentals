import { Injectable } from '@angular/core';
import { ISession } from '../shared/index';

@Injectable()
export class VoterService {

    deleteVoter(session: ISession, userName: string) {
        session.voters = session.voters.filter(voter => voter != userName);
    }

    addVoter(session: ISession, userName: string) {
        session.voters.push(userName);
    }

    userHasVoted(session: ISession, userName: string) {
        return session.voters.some(voter => voter === userName);
    }
}