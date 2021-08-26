import { Component, OnChanges, Input } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'] // styleUrls recebe um array pois podemos aplicar vários estilos
})
export class StarComponent implements OnChanges {

  @Input()
  rating: number = 0;
  starWidth: number;

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
    this.starWidth = this.rating * 74 / 5;

  }
}
