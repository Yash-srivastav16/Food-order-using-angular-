export class Food{
    id!:number;   //symbol so we have not to create constructor
    price!:number;
    name!:string;
    favourite:boolean=false;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];
}