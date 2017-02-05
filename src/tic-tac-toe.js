class TicTacToe {
    constructor() {
        this.symbol = 'x';
        this.prev;
        this.a = [new Array(3),
                new Array(3),
                new Array(3)];
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.a[rowIndex][columnIndex]){
        this.a[rowIndex][columnIndex] = this.symbol;
        this.prev = this.symbol;
        switch (this.symbol) {
            case 'x':
            this.symbol = 'o';
            break;
            case 'o':
            this.symbol = 'x';
            break;
        }} else {
            return this.symbol;
        }
    }

    isFinished() {
        if (this.getWinner()!==null || this.noMoreTurns() === true) return true;
        else return false;
    }

    getWinner() {
        var winner = "";
        //Check across the row
        for (var i = 0; i < 3; ++i) {
            if (this.a[i][0] !== "" && this.a[i][0] === this.a[i][1] && this.a[i][1]===this.a[i][2]) {
                winner = this.a[i][0];
            }
        }
        //Check down the columns
        if(!winner){
            for (var i = 0; i < 3; ++i) {
                if (this.a[0][i]!=="" && this.a[0][i]===this.a[1][i] && this.a[1][i]===this.a[2][i]) {
                    winner = this.a[0][i];
                } 
            }
        }
        //Check on the diagonals
        if(!winner){
            if (this.a[0][0]!=="" && this.a[0][0]===this.a[1][1] && this.a[1][1]===this.a[2][2]) {
                winner = this.a[0][0];
            } else if (this.a[0][2]!=="" && this.a[0][2]===this.a[1][1] && this.a[1][1]===this.a[2][0]) {
                winner = this.a[0][2];
            }
        }
        if (!winner) return null;
        else return this.prev;
    }

    noMoreTurns() {
        for (var i=0;i<3;i++) {
                for (var j=0;j<3;j++) {
                    if (!this.a[i][j]) return false; 
                }
            } return true;
    }

    isDraw() {
        if (this.isFinished === false || this.getWinner()!==null ) return false;
        else  if (this.noMoreTurns() === true) return true;
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.a[rowIndex][colIndex]) return this.a[rowIndex][colIndex];
        else return null;
    }
}

module.exports = TicTacToe;
