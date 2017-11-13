import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import 'rxjs/Rx';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}

    getTeam() {
        return this.http.get('https://treetracker-24de7.firebaseio.com/team-members.json');
        // .map(
        //     (response: Response) => {
        //         const team = response.json();
        //         console.log(team);
        //         return team;
        // });
    }

    // just used this post to post data to firebase db.
    // postAllTrees(trees: any[]) {
    //     return this.http.post('https://treetracker-24de7.firebaseio.com/trees.json', trees);
    // }

    getTrees() {
        return this.http.get('./assets/trees.json');
    }
}
