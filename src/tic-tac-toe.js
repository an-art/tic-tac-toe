class TicTacToe {
    constructor() {
        this.symbol = 'x';
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

    }

    getWinner() {

    }

    noMoreTurns() {
        for (var i=0;i<3;i++) {
                for (var j=0;j<3;j++) {
                    if (!this.a[i][j]) return false; 
                }
            } return true;
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        if (this.a[rowIndex][colIndex]) return this.a[rowIndex][colIndex];
        else return null;
    }
}

module.exports = TicTacToe;
