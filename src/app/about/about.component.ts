import { Component, OnInit } from '@angular/core';
import { LeaderService } from "../services/leader.service"
import { Leader } from "../shared/leader"

import { flyInOut, expand } from '../animations/app.animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host:{
    '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations:[
    flyInOut(), expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  featureLeader: Leader;
  errMess: string;

  constructor(private leaderService:LeaderService) { }

  /*ngOnInit() {
    this.leaderService.getLeaders()
      .subscribe(leaders => {this.leaders =leaders},
        errmess => this.errMess = <any>errmess)
    this.leaderService.getFeaturedLeader()
      .subscribe(featuredLeader=> {this.featureLeader = featuredLeader},
        errmess => this.errMess = <any>errmess)
  }*/
  ngOnInit() {
    this.leaderService.getLeaders()
      .then(leaders => {this.leaders =leaders},
        errmess => this.errMess = <any>errmess)
    this.leaderService.getFeaturedLeader()
      .then(featuredLeader=> {this.featureLeader = featuredLeader},
        errmess => this.errMess = <any>errmess)
      }
  
}
