import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnChanges {


@Input() category !:string;

ngOnChanges(changes: SimpleChanges): void {
  console.log(this.category)
}


}
