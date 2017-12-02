import { Component, OnInit } from '@angular/core';
import { DataUtilsService } from '../utilities/data-utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {
  private monumentArray = new Array();

  constructor(
    private router: Router,
    private dataUtilsService: DataUtilsService
  ) { }

  ngOnInit() {
    this.monumentArray.push({
      'name': 'Amer-Fort : Shila Mata Mandir',
      'panoUrl': 'https://www.google.com/maps/embed?pb=!1m0!4v1512253696483!6m8!1m7!1sCAoSLEFGMVFpcE42SWpjN0JUMEZQMlY4cnRmSWx6UVJwMDdCSGdaQmY3S3hKazVH!2m2!1d26.9865089!2d75.85056420000001!3f82.12274278950088!4f0!5f0.7820865974627469',
      // 'imageUrl': ''
    });
    this.monumentArray.push({
      'name': 'Jaigarh Fort',
      'panoUrl': 'https://www.google.com/maps/embed?pb=!1m0!4v1512255535893!6m8!1m7!1sCAoSLEFGMVFpcE9EVTcyV2xVYkNLeS1maVVnUVNnYXRpZG1wa3FBUmR5OFFRWDZw!2m2!1d26.9859487!2d75.8462369!3f119.17137368229693!4f0!5f0.7820865974627469',
      // 'imageUrl': ''
    });

    this.monumentArray.push({
      'name': 'Sahelio ki Badi',
      'panoUrl': 'https://www.google.com/maps/embed?pb=!1m0!4v1512255754387!6m8!1m7!1sCAoSLEFGMVFpcFBqbHJXeF9LaTFwTDRfN1lBUEJmZ0VWNjJfbjYwTGZXeEczX1c2!2m2!1d24.60245071791021!2d73.68506614421415!3f209.31!4f-9.090000000000003!5f0.7820865974627469',
      // 'imageUrl': ''
    });

    this.monumentArray.push({
      'name': 'Jal Mahal',
      'panoUrl': 'https://www.google.com/maps/embed?pb=!1m0!4v1512256073382!6m8!1m7!1sCAoSLEFGMVFpcFBWaTZoZ3FKRkZnYzN2NEc2TjhHTHo2bmZsVUhVM0p1YTBaZWFL!2m2!1d26.95345!2d75.846148!3f137.73396729439506!4f8.152378025947783!5f0.7820865974627469',
      // 'imageUrl': ''
    });

    
    this.monumentArray.push({
      'name': 'Hawa Mahal',
      'panoUrl': 'https://www.google.com/maps/embed?pb=!1m0!4v1512256244242!6m8!1m7!1sCAoSLEFGMVFpcE14ejlQWWNXMHpHVEQ1RGo0S3UwZWsxdGlLRFYtRmVWSWZKa0Rh!2m2!1d26.92376707817993!2d75.82707979830438!3f176.85537671744873!4f20.706829462657765!5f0.7820865974627469',
      // 'imageUrl': ''
    });

    
    this.monumentArray.push({
      'name': 'Nahargarh Zoological Park',
      'panoUrl': 'https://www.google.com/maps/embed?pb=!1m0!4v1512256391538!6m8!1m7!1sCAoSLEFGMVFpcE5IUTRTelBaQ0g4WFJ3R1hsQmlRWUd6SFJFQ25ZWFF2b3JDeC15!2m2!1d27.0160575!2d75.8644631!3f355!4f0!5f0.7820865974627469',
      // 'imageUrl': ''
    });
  }

  openPano(_url) {
    this.dataUtilsService.panoUrl = _url;
    this.router.navigateByUrl('full-vr-view');
  }


}
