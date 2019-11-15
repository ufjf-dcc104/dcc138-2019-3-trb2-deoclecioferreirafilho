function Explosion(params = {}) {
    exemplo = {
        x: 0,
        y: 0,
        l: 4,
        c: 4,
        b: true,
        max: 16,
        mult: 26,
        size: 64,
        image: "explosion",
        frame: 0,
        w: 64,
        h: 64,
        props: {
            tipo: "boom"
        },
    }
    Object.assign(this, exemplo, params);
}

Explosion.prototype.mover = function (dt) {
    this.frame += this.mult * dt;
    if (Math.floor(this.frame) > this.max) {
        this.morto = this.b;
        //this.frame = 0;
    }
}

Explosion.prototype.desenhar = function () {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.a + Math.PI / 2);
    var F = Math.floor(this.frame);

    ctx.drawImage(
        this.scene.assets.img(this.image),
        (F % l) * this.size,
        Math.floor(F / c) * this.size,
        this.size,
        this.size,
        -this.w / 2,
        -this.h / 2,
        this.w,
        this.h
    );
    ctx.restore();
}

Explosion.prototype.comportar = function () {

}

Explosion.prototype.colidiuCom = function () {
    return false;
}