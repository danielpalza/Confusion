import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from "../shared/leader";
import { LeaderService } from "../services/leader.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leaderFeature: Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, 
    private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(featuredDish => this.dish = featuredDish)
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion)
    this.leaderService.getFeaturedLeader()
      .subscribe(featuredLeader => this.leaderFeature = featuredLeader)
  }

}
