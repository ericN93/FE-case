import { NgModule } from '@angular/core';
import { Roll } from './roll.module'
   

@NgModule({    
  imports: [Roll],    
  exports: []    
})    
export class BowlingGame {
    game: any[]
    current_rolls = new Roll
    max_rolls: number
    total_score: number
    roll_counter: number
    options: any []
    finished: boolean

    constructor() {
      this.game = []
      this.current_rolls = new Roll
      this.max_rolls = 10
      this.total_score = 0
      this.roll_counter = 1
      this.options = [
        {"value": 0, "flag": true },
        {"value": 1, "flag": true },
        {"value": 2, "flag": true },
        {"value": 3, "flag": true },
        {"value": 4, "flag": true },
        {"value": 5, "flag": true },
        {"value": 6, "flag": true },
        {"value": 7, "flag": true },
        {"value": 8, "flag": true },
        {"value": 9, "flag": true },
        {"value": 10, "flag": true },
      ]
      this.finished = false
    }


    roll_handler(value: number) {
      switch(this.roll_counter) { 
        case 1: { 
          this.roll_first(value)
          break
        } 
        case 2: { 
          this.roll_second(value)
          break; 
        }
        case 3: { 
          this.roll_third(value)
          break; 
        }
      }
      this.update_valid_options(value)

      if(this.current_rolls.first_roll != null && this.current_rolls.second_roll != null && this.game.length < this.max_rolls - 1) {
        this.game[this.game.length] = this.current_rolls
        this.current_rolls.count_score_handler(false)
        this.reset_current_roll()
        this.reset_valid_options()
      } else if(this.current_rolls.first_roll != null && this.current_rolls.second_roll != null && this.current_rolls.third_roll != null) {
        this.game[this.game.length] = this.current_rolls
        this.current_rolls.count_score_handler(true)
        this.reset_current_roll()
        this.reset_valid_options()
      }

      if(this.game.length >= 9 && this.current_rolls.first_roll + this.current_rolls.second_roll >= 10) {
        this.reset_valid_options()
      }

      this.update_game_score()
    }


    roll_first(value: number) {
      this.current_rolls.set_first_roll(value)
      if(this.current_rolls.get_first_roll() == 10 && this.game.length < this.max_rolls - 1) {
        this.current_rolls.set_second_roll(0)
      }
      if(value != 10 || this.game.length >= this.max_rolls - 1) {
        this.roll_counter = 2
      }
    }

    roll_second(value: number) {
      this.current_rolls.set_second_roll(value)
      this.roll_counter = 1
      let score = this.current_rolls.first_roll + this.current_rolls.second_roll
      if(this.game.length >= this.max_rolls - 1 && score >= 10) {
        this.roll_counter = 3
      } else {
        this.current_rolls.set_third_roll(0)
      }
    }

    roll_third(value: number) {
      this.current_rolls.set_third_roll(value)
    }

    update_valid_options(roll_value: number) {
      let key = 10 - roll_value
      for (let option of this.options) {
        if(key < option.value){
          option.flag = false
        }
      }
    }

    update_game_score(){
      this.total_score = 0
      for(let roll of this.game) {
        this.total_score += roll["score"]
      }
    }

    check_if_done() {
      let ret = false
      if(this.game.length >= this.max_rolls) {
        if(this.game[this.game.length - 1].third_roll >= 0) {
          ret = true
        }
      }
      return ret
    }

    reset_current_roll() {
      this.current_rolls = new Roll
    }

    reset_valid_options() {
      for(let option of this.options) {
        option.flag = true
      }
    }

    restart_game() {
      this.current_rolls = new Roll
      this.game = []
      this.total_score = 0
      this.roll_counter = 1
      this.reset_valid_options()
    }
 } 