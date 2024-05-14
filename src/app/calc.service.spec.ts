import { CalcService } from './calc.service';

import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';
import { share } from 'rxjs';
// import { CalcService } from './calc.service';

// describe('CalcService', () => {
//   let service: CalcService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CalcService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
let shared: SharedService;
let calc: CalcService;
beforeEach(() => {
  // shared = new SharedService();
  // calc = new CalcService(shared);

  TestBed.configureTestingModule({
    providers: [CalcService],
  });
  calc = TestBed.inject(CalcService);
  shared = TestBed.inject(SharedService);
});

describe('CaclService', () => {
  it('should multiply two numbers', () => {
    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
  });

  it('should add two number', () => {
    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    const result = calc.add(3, 5);
    expect(result).toBe(8);
  });

  // it('should call the mySharedFunction Function', () => {
  //   const shared = new SharedService();
  //   const calc = new CalcService(shared);
  //   spyOn(shared, 'mySharedFunction').and.callThrough();
  //   const result = calc.multiply(3, 5);
  //   // expect(shared.mySharedFunction).toHaveBeenCalled();
  //   expect(result).toBe(15);
  // });
});
