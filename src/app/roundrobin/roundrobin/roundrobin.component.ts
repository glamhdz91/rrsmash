import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-roundrobin',
  templateUrl: './roundrobin.component.html',
  styleUrls: ['./roundrobin.component.css']
})
export class RoundrobinComponent implements OnInit, MatFormFieldModule {
  
  form: any;
  players: any;
  roundsArray: any;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.players = [];
    this.roundsArray = [];
    this.form = this.fb.group({
      'total': ['', Validators.required]
    })
  }

  updateTotalPlayersFields() {
    this.players = [];
    for (let i = 0; i < this.form.value.total; i++) {
      const player = {name: 'Player' + (i + 1)}
      this.players.push(player)
    }

    this.players.forEach(player => this.form.addControl(player.name, this.fb.control('')))
    console.log('players', this.players)
    if (this.form.dirty && this.form.valid) {
      // alert(`total: ${this.form.value.total}`);
    }
  }

  getNames() {
    
    return
  }

  generateRounds() {
    const totalPlayers = this.form.value.total;
    let totalRounds = totalPlayers * (totalPlayers - 1);
    this.roundsArray = [];
    let host = 0;
    let hostCounter = 0;
    let challenger = 1;
		
    for (let i = 0; i < totalRounds; i++) {
			if (hostCounter < totalPlayers - 2) {
					hostCounter++;
					if (challenger < totalPlayers - 1) {	
						this.roundsArray.push(
              this.form.value[this.players[host].name] +
              ' vs ' +
              this.form.value[this.players[challenger].name]
            );
						challenger++;
					} else {
						this.roundsArray.push(
              this.form.value[this.players[host].name] +
              ' vs ' +
              this.form.value[this.players[challenger].name]
            );
						challenger = 0;
					}

			} else {
          this.roundsArray.push(this.form.value[this.players[host].name] +
            ' vs ' +
            this.form.value[this.players[challenger].name]
          );
					if (host < totalPlayers - 1) {
							host++;
							if (host === totalPlayers - 1) {
								challenger = 0;
							} else {
								challenger = host + 1;
							}
					} else {
							host = 0;
							challenger = 1;
					}
					hostCounter = 0;
			}
		}
    console.log('roundsArray', this.roundsArray)
  }

}
