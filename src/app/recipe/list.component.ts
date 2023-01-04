import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Recipe', 'This is my first recipe', '')
  ];

  @ViewChild('myInput', {static: true}) myInput: ElementRef;

  ngOnInit(): void {
  }

  onClick(): void{
    console.log(this.myInput.nativeElement.value);    
  }

}
