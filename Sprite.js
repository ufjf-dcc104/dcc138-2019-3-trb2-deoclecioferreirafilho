function Sprite(params = {}) {
    var exemplo = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        ax: 0,
        ay: 0,
        h: 10,
        w: 10,
        a: 0,
        va: 0,
        vm: 0,
        poses: {
            1: { c: 0, l: 10, n: 1 }, // parado frente
            2: { c: 1, l: 10, n: 8 }, // andando baixo
            3: { c: 0, l: 9, n: 1 }, // parado esquerda
            4: { c: 1, l: 9, n: 8 }, // andando esquerda 
            5: { c: 0, l: 11, n: 1 }, // parado direita
            6: { c: 1, l: 11, n: 8 }, // andando direita 
            7: { c: 0, l: 8, n: 1 }, // parado costa
            8: { c: 1, l: 8, n: 8 }, // andando cima

        },
        pose: 0,
        speed: 0,
        frame: 0,
        props: {},
        cooldown: 0,
        color: "blue",
        imune: 0,
        atirando: 0,
        comportar: undefined,
        scene: undefined
    }
    Object.assign(this, exemplo, params);
}
Sprite.prototype = new Sprite();
Sprite.prototype.constructor = Sprite;



Sprite.prototype.desenhar = function (ctx) {

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.strokeRect(-this.w / 2, -this.h / 2, this.w, this.h);
    ctx.rotate(this.a + Math.PI / 2);

    ctx.fillStyle = this.color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
    ctx.strokeRect(-this.w / 2, -this.h / 2, this.w, this.h);
    ctx.restore();
};

Sprite.prototype.mover = function (dt) {
    this.moverOrtogonal(dt)
    this.frame += 2 * dt;
    if (this.frame > this.poses[this.pose].n) { this.frame = 0 }
    //this.frame += 6 * dt;
    //if (this.frame > 9) { this.frame = 0 }
}

Sprite.prototype.moverOrtogonal = function (dt) {

    this.vx += this.speed;
    this.vy += this.speed;

    //this.a = this.a + this.va*dt;
/*
    this.vx = this.vx + this.ax * dt;//- this.vx * 0.9 * dt;
    this.vy = this.vy + this.ay * dt /*+ 120 * dt;


    this.mc = Math.floor(this.x / this.scene.map.SIZE);
    this.ml = Math.floor(this.y / this.scene.map.SIZE);

    this.aplicaRestricoes(dt);
    this.cooldown = this.cooldown - dt;
    */
}