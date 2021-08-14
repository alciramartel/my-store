import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectFade, Swiper } from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
