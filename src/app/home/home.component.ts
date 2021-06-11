import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from "../shared/leader";
import { LeaderService } from "../services/leader.service";

import { flyInOut, expand } from '../animations/app.animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dishErrMess: string;
  dish: Dish;
  promotion: Promotion;
  leaderFeature: Leader;
  errMess: string;
  
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, 
    private leaderService: LeaderService,
    ) { }
    /*constructor(private dishservice: DishService,
      private promotionservice: PromotionService, 
      private leaderService: LeaderService,
      @Inject ("BaseURL") private BaseURL) { }*/

    //WIth observable and HTTP request
  /*ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(featuredDish => this.dish = featuredDish,
        dishErrMess => this.dishErrMess = <any>dishErrMess)
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => {this.promotion = promotion; console.log({promotion})},
        errmess => this.errMess = <any>errmess)
    this.leaderService.getFeaturedLeader()
      .subscribe(featuredLeader => {this.leaderFeature = featuredLeader; console.log({featuredLeader})},
        errmess => this.errMess = <any>errmess)
  }*/

  ngOnInit() {
    this.dishservice.getDishFeatured()
      .then(featuredDish => this.dish = featuredDish)
    this.promotionservice.getFeaturedPromotion()
      .then(promotion => {this.promotion = promotion; console.log({promotion})},
        errmess => this.errMess = <any>errmess)
    this.leaderService.getFeaturedLeader()
      .then(featuredLeader => {this.leaderFeature = featuredLeader; console.log({featuredLeader})},
        errmess => this.errMess = <any>errmess)
  }


}
