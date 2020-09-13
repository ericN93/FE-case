import { NgModule } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
  

@NgModule({    
  imports: [],    
  exports: []    
})    
export class Roll {
    first_roll: number
    second_roll: number
    third_roll: number
    score: number

    constructor() {
      this.first_roll = null
      this.second_roll = null
      this.third_roll = null
      this.score = null
    }

    set_first_roll(value: number) {
      this.first_roll = value
    }

    set_second_roll(value: number) {
      this.second_roll = value
    }

    set_third_roll(value: number) {
      this.third_roll = value
    }

    get_first_roll() {
      return this.first_roll
    }

    get_second_roll() {
      return this.second_roll
    }

    get_third_roll() {
      return this.third_roll
    }

    get_score() {
      return this.score
    }

    count_score_handler(third_roll_flag: boolean) {
      if(!third_roll_flag) {
        this.count_score_two_pins()
      } else {
        this.count_score_three_pins()
      }
    }

    count_score_two_pins() {
      if(this.first_roll == 10) {
        this.score = 20
      } else if(this.first_roll + this.second_roll == 10) {
        this.score = 14
      } else {
        this.score = this.first_roll + this.second_roll
      }
    }

    count_score_three_pins(){
      if(this.first_roll == 10) {
        this.score = 20

        if(this.second_roll == 10) {
          this.score += 20
        }

        if(this.third_roll == 10){
          this.score += 20
        }

        if(this.second_roll + this.third_roll == 10){
          this.score += 14
        } else if(this.second_roll + this.third_roll < 10) {
          this.score += this.second_roll + this.third_roll
        }

      } else if(this.first_roll + this.second_roll == 10) {
          this.score = 14
          if(this.third_roll != 10){
            this.score += this.third_roll
          } else {
            this.score += 10
          }
        } else {
          this.score = this.first_roll + this.second_roll
        }
    }
 } 