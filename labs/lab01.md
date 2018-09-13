# Lab 1 - debug the casino-app

Prerequisites: latest version of vscode installed

1. Open vscode in an empty directory
1. Copy paste the "Casino app code" to a new file named "casino-app.js".
1. There might be some bugs in the code try to find them all WITHOUT running the code.
1. Now add this as a first line: `// @ts-check`
1. Can you now find more bugs?

**Casino app code:**

```javascript
class Person {
    /**
     * @param {string} name
     */
    constructor(name) {
        this._name = name;
    }
}

class Player extends Person {
    /**
     *
     * @param {string} name
     * @param {number} chips
     */
    constructor(name, chips) {
        this.chips = chips;
    }

    toString() {
        return `${this.name} has ${chips} number of chips left`;
    }
}

var playerOne = new Player('Han', 46);
var playerTwo = new Player('Leia', 68);

var highestNumberOfChips = Math.max([playerOne.chips, playerTwo.chips]);
console.log(highestNumberOfChips + ' is the highest number of chips');

class RouletteBoard {

    constructor() {
        this.bedRecords = [];
    }

    /**
       *
       * @param {Player} player
       * @param {number} bed
       */
    placeBed(player, bed) {
        var record = this.records.find(r => r.player === player && r.bed === bed);
        if (!record) {
            record = { player: player, bed: bed, numberOfChips: 0 };
            this.bedRecords.add(record);
        }
        record.numberOfChips++;
    }

    play() {
        var winner = Math.floor(Math.random() * 36);
        console.log('winning number: ' + winner);
        for (var record in this.bedRecords) {
            if (this.bedRecords[record].bed === winner) {
                var loot = this.bedRecords[record].numberOfChips * 10;
                this.bedRecords[record].player.chips += loot;
                console.log(this.bedRecords[record].player.toString() + ' wins ' + loot);
            }
        }
        this.bedRecords = [];
    }
}

var roulette = new RouletteBoard();
roulette.placeBed(playerOne, 20);
roulette.placeBed(playerOne, 20);
roulette.placeBed(playerTwo, 1);
roulette.placeBed(playerTwo, 2);
roulette.placeBed(playerTwo, 6);
roulette.placeBed(playerTwo, 31);
roulette.placeBed(playerTwo, 5);
roulette.placeBed(playerTwo, 4);

roulette.play();
```
