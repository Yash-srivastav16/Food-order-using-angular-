import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!
  }
  getAllFoodByTag(tag:string) :Food[]{
    
    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food=>food.tags?.includes(tag))
  }
  getAllTag():Tag[]{
    return [
      {name:'All', count:14},
      {name:'FastFood', count:5},
      {name:'Lunch', count:9},
      {name:'Pizza', count:4},
      {name:'Chowmein', count:6},
      {name:'Soup', count:2},
    ]
  }
  getAll():Food[]{
    return [
      {
        id:1,
        name:'Pizza',
        cookTime: '10-20',
        price: 345,
        favourite: true,
        origins:['italy','indian','china'],
        star:4.5,
        imageUrl: '/assets/food1.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },
      {
        id:2,
        name:'Kachori',
        cookTime: '20-25',
        price: 245,
        favourite: false,
        origins:['brazil','dubai'],
        star:4.2,
        imageUrl: '/assets/food2.jpg',
        tags: ['slowFood','Lunch'],
      },
      {
        id:3,
        name:'Cereals',
        cookTime: '05-08',
        price: 108,
        favourite: false,
        origins:['Indian','Bangladesh'],
        star:4.1,
        imageUrl: '/assets/food3.jpg',
        tags: ['Milk','Soup','Lunch'],
      },
      {
        id:4,
        name:'Macroni',
        cookTime: '30-40',
        price: 300,
        favourite: false,
        origins:['Bengali','italy'],
        star:2.8,
        imageUrl: '/assets/food4.jpg',
        tags: ['FastFood','Lunch'],
      },
      {
        id:5,
        name:'Chowmein',
        cookTime: '10-25',
        price: 80,
        favourite: false,
        origins:['Bihar','india','italy'],
        star:4.6,
        imageUrl: '/assets/food5.jpg',
        tags: ['FastFood','Chowmein','Lunch'],
      },
      {
        id:6,
        name:'Roll',
        cookTime: '10-13',
        price: 76,
        favourite: false,
        origins:['Dubai','italy'],
        star:3.9,
        imageUrl: '/assets/food6.jpg',
        tags: ['FastFood','Lunch','Roll'],
      },
      {
        id:7,
        name:'Crunchy',
        cookTime: '05-08',
        price: 90,
        favourite: false,
        origins:['Bangladesh','india'],
        star:4.2,
        imageUrl: '/assets/food2.jpg',
        tags: ['FastFood','Crunchy','Lunch'],
      },
      {
        id:8,
        name:'Chowmein Chilly',
        cookTime: '10-20',
        price: 180,
        favourite: false,
        origins:['italy','china'],
        star:4.1,
        imageUrl: '/assets/food5.jpg',
        tags: ['FastFood','Chowmein','Lunch'],
      }
    ];

  }
}
