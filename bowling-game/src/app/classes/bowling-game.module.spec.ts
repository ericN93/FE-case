import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingGame } from './bowling-game.module';
import { Roll } from './roll.module';
describe('BowlingComponent', () => {
  let module: BowlingGame;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BowlingGame, Roll ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
  });

  it('Strike, spare and 4|0 should be 38', () => {
    let expected = 38
    let result = 0

    let game = new BowlingGame 

    game.roll_handler(10)

    game.roll_handler(9)
    game.roll_handler(1)

    game.roll_handler(4)
    game.roll_handler(0)

    result = game.total_score

    expect(expected).toEqual(result)
  });

  it('Perfect series should be 300', () => {
    let expected = 300
    let result = 0

    let game = new BowlingGame 

    game.roll_handler(10)
    game.roll_handler(10)
    game.roll_handler(10)
    game.roll_handler(10)
    game.roll_handler(10)
    game.roll_handler(10)
    game.roll_handler(10)
    game.roll_handler(10)
    game.roll_handler(10)

    game.roll_handler(10)
    game.roll_handler(10)
    game.roll_handler(10)

    result = game.total_score

    expect(expected).toEqual(result)
  });
});
