import { Component, OnInit } from '@angular/core';
import { BowlingGame } from '../classes/bowling-game.module'

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.component.html',
  styleUrls: ['./bowling.component.css']
})
export class BowlingComponent implements OnInit {

  constructor(public bowling_game: BowlingGame) { }
  game_flag = true

  ngOnInit() {
  }

  roll(value: number) {
    this.bowling_game.roll_handler(value)
    if (this.bowling_game.check_if_done()) {
        this.game_flag = false
    }
  }

  restart_game() {
    this.bowling_game.restart_game()
    this.game_flag = true
  }
}
