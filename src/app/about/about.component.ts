import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from "angularfire2";
import { FirebaseService } from "app/firebase-service/firebase.service";

@Component({
  selector: 'ip-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 aboutData: FirebaseObjectObservable<any>;
  constructor(private firebaseService :FirebaseService) {
   this.aboutData =  firebaseService.getDataByUrl('https://ilya-pisman.firebaseio.com/about');
   }
  ngOnInit() {
  }

}
