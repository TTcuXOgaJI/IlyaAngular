import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFire } from "angularfire2";

@Injectable()
export class FirebaseService {
  constructor(private af: AngularFire) { }
  getDataByUrl(url: string):FirebaseObjectObservable<any> {
    return this.af.database.object(url);
  }
}
