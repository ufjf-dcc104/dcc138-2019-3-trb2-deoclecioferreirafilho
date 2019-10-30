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
            ctx.drawImage(this.scene.assets.img("tiles"),
                0 * 32,
                0 * 32,
                32,
                32,
                c * this.SIZE,
                l * this.SIZE,
                this.SIZE,
                this.SIZE
            );
            switch (this.cells[c][l].tipo) {
                case 100:
                    x = 0;
                    y = 0;
                    // x = 3;
                    // y = 5;
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
                case 1:
                    x = 2;
                    y = 6;
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
                case 2:
                    x = 3;
                    y = 6;

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
                case 3:
                    x = 2;
                    y = 7;
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
                case 4:
                    x = 3;
                    y = 7;
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
                case 5:
                    x = 0;
                    y = 6;
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
                case 6:
                    x = 1;
                    y = 6;
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
                case 7:
                    x = 0;
                    y = 7;
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
                case 8:
                    x = 1;
                    y = 7;
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
                case 9:
                    x = 0;
                    y = 8;
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
                case 10:
                    x = 1;
                    y = 8;
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
                case 11:
                    x = 0;
                    y = 9;
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
                case 12:
                    x = 1;
                    y = 9;
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
                case 13:
                    x = 0;
                    y = 10;
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
                case 14:
                    x = 1;
                    y = 10;
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
                case 15:
                    x = 0;
                    y = 11;
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
                case 16:
                    x = 1;
                    y = 11;
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
            //ctx.fillStyle = cor;
            //ctx.fillRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);

            //  ctx.strokeStyle = "black";

            //ctx.strokeRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
        }
    }
}