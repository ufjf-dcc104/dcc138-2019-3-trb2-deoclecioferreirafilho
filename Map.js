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
                case 17:
                    x = 10;
                    y = 1;
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
                case 18:
                    x = 9;
                    y = 2;
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
                case 19:
                    x = 10;
                    y = 2;
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
                case 20:
                    x = 0;
                    y = 3;
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
                case 21:
                    x = 1;
                    y = 3;
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
                case 22:
                    x = 2;
                    y = 3;
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
                case 23:
                    x = 3;
                    y = 3;
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
                case 24:
                    x = 4;
                    y = 3;
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
                case 25:
                    x = 5;
                    y = 3;
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
                case 26:
                    x = 6;
                    y = 3;
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
                case 27:
                    x = 7;
                    y = 3;
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
                case 28:
                    x = 8;
                    y = 3;
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
                case 29:
                    x = 9;
                    y = 3;
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
                case 30:
                    x = 10;
                    y = 3;
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
                case 31:
                    x = 11;
                    y = 1;
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
                case 32:
                    x = 12;
                    y = 1;
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
                case 33:
                    x = 13;
                    y = 1;
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
                case 32:
                    x = 14;
                    y = 1;
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
                case 33:
                    x = 14;
                    y = 0;
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
                case 34:
                    x = 12;
                    y = 3;
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
                case 35:
                    x = 14;
                    y = 2;
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
                case 36:
                    x = 15;
                    y = 2;
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
                case 37:
                    x = 14;
                    y = 3;
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
                case 38:
                    x = 15;
                    y = 3;
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