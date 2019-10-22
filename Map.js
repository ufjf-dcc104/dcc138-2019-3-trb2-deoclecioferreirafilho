function Map(modelo) {
    exemplo = {
        cells: [],
        LINES: 20,
        COLUMNS: 20,
        SIZE: 32,
        scene: undefined,
        assets: undefined
    }
    Object.assign(this, exemplo, modelo);
    for (var c = 0; c < this.COLUMNS; c++) {
        this.cells[c] = [];
        for (var l = 0; l < this.LINES; l++) {
            exemplo.cells[c][l] = { tipo: 0 };
        }
    }
    if (modelo.m) {
        for (var c = 0; c < this.COLUMNS; c++) {
            for (var l = 0; l < this.LINES; l++) {
                this.cells[c][l] = { tipo: modelo.m[l][c] };
            }
        }
    }
}
Map.prototype.desenhar = function (ctx) {
    var cor = "black";
    var x = 0;
    var y = 0;
    for (var c = 0; c < this.COLUMNS; c++) {
        for (var l = 0; l < this.LINES; l++) {
            switch (this.cells[c][l].tipo) {
                case 0:
                   
                    x = 0;
                    y = 0;
                   // x = 3;
                   // y = 5;
                    ctx.drawImage(this.scene.assets.img("grama"),
                        x * 64,
                        y * 64,
                        64,
                        64,
                        c * this.SIZE,
                        l * this.SIZE,
                        this.SIZE,
                        this.SIZE
                    );
                    break;
                case 1:
                    x = 0;
                    y = 0;
                   // x = 69;
                   // y = 17;
                   ctx.drawImage(this.scene.assets.img("tiles"),
                       x * 32,
                       y * 32,
                       32,
                       32,
                       c * this.SIZE,
                       l * this.SIZE,
                       this.SIZE,
                       this.SIZE
                   );
                    
                    break;
                default:
                    cor = "black";
            }
            
           // ctx.fillStyle = cor;
          //  ctx.fillRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
            // ctx.strokeStyle = "black";
            // ctx.strokeRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
            
        }
    }
}