import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  selectedCar: Car;
  showMeRent: boolean = false;
  showMeGet: boolean = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  rentACar(): void {
    this.selectedCar = null;
    this.showMeRent = true;
  }
  
  getBackCar(): void {
    this.selectedCar = null;
    this.showMeGet = true;
  }


  getCars(): void {
    this.carService.getCarsWithPromise().then(cars => this.cars = cars);
  }

  onSelect(car: Car): void {
    console.warn(car);
    this.selectedCar = car;
  }

  rent(car: Car): void {
    console.warn(car);
    this.carService.rent(car);
  }

}
