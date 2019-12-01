var EstadoCena = {
    CARRREGANDO: Symbol(),
    EM_JOGO: Symbol(),
    PAUSA: Symbol(),
    FIM_TEMPO: Symbol(),
    GAME_OVER: Symbol(),
    INICIA_JOGO: Symbol(),
    AGUARDA_INICIO: Symbol()
}
function Scene(params) {
    var exemplo = {
        sprites: [],
        assets: [],
        toRemove: [],
        ctx: null,
        w: 640,
        h: 640,
        assets: null,
        map: null,
        cargaImg: 0,
        carregando: 0,
        estado: EstadoCena.CARRREGANDO,
        inicio: 1,
        pausa: 2,
        fim: 3
    }
    Object.assign(this, exemplo, params);
}

Scene.prototype = new Scene();
Scene.prototype.constructor = Scene;

Scene.prototype.adicionar = function (sprite) {
    this.sprites.push(sprite);
    sprite.scene = this;
};

Scene.prototype.desenhar = function () {
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].desenhar(this.ctx);
    }
};

Scene.prototype.mover = function (dt) {
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].mover(dt);
    }
};

Scene.prototype.comportar = function () {
    for (var i = 0; i < this.sprites.length; i++) {
        if (this.sprites[i].comportar) {
            this.sprites[i].comportar();
        }
    }
};


Scene.prototype.atualizar = function () {
    if (mensages.length !== 0)
        for (var i = 0; i < mensages.length; i++) {
            var mensagens = mensages[i];
            if (mensagens.visible) {
                this.ctx.font = mensagens.font;
                this.ctx.fillStyle = mensagens.color;
                this.ctx.texBaseline = mensagens.baseline;
                // mensagens.x = (this.w - ctx.measureText(mensagens.text).width) / 2;

                this.ctx.fillText(mensagens.text, mensagens.x, mensagens.y);

            }
        }

}

Scene.prototype.tocarMusica = function (assets) {
    this.assets.play(assets);
    assets.scene = this;
}
Scene.prototype.pausarMusica = function (assets) {
    this.assets.pause(assets);
    assets.scene = this;
}

Scene.prototype.adicionarMens = function () {
    this.mensagem.push(mensagem);
    this.mensagem = this;
}

Scene.prototype.limpar = function () {
    this.ctx.clearRect(0, 0, this.w, this.h);
}

Scene.prototype.checaColisao = function () {
    for (var i = 0; i < this.sprites.length; i++) {
        if (this.sprites[i].morto) {
            this.toRemove.push(this.sprites[i]);
        }

        if (this.sprites[i].props.tipo === "tiro"
            && (this.sprites[i].x > 640 || this.sprites[i].y > 640 ||
                this.sprites[i].x < 0 || this.sprites[i].y < 0)) {
            this.toRemove.push(this.sprites[i]);
        }

        for (var j = i + 1; j < this.sprites.length; j++) {
            if (this.sprites[i].colidiuCom(this.sprites[j])) {
                if ((this.sprites[i].props.tipo === "pc"
                    && this.sprites[j].props.tipo === "npc") ||(
                    this.sprites[i].props.tipo === "pc"
                    && this.sprites[j].props.tipo === "epc" ) ) {
                    this.toRemove.push(this.sprites[i]);
                    this.adicionar(new Explosion({ image: "light", x: this.sprites[j].x, y: this.sprites[j].y }));
                    this.assets.play("cut");
                    this.estado = EstadoCena.GAME_OVER;
                    mensageFim.visible = true;
                    this.assets.pause("little");
                    
                    /*this.toRemove.push(this.sprites[j]);
                    this.adicionar(new Explosion({ image: "light", x: this.sprites[j].x, y: this.sprites[j].y }));
                    this.assets.play("gum");*/

                }
                else
                    if ((this.sprites[i].props.tipo === "npc"
                        && this.sprites[j].props.tipo === "tiro") ||
                        (this.sprites[i].props.tipo === "epc"
                        && this.sprites[j].props.tipo === "tiro")) {
                        if (this.sprites[i].props.tipo === "epc"
                            && this.sprites[j].props.tipo === "tiro")
                            mensagePontos.text = "PONTOS:" + exibeTexto(pontos+=100);

                        this.toRemove.push(this.sprites[i]);
                        this.toRemove.push(this.sprites[j]);
                        this.adicionar(new Explosion({ image: "light", l: 5, c: 5, x: this.sprites[i].x, y: this.sprites[i].y }));
                        this.assets.play("gum");
                    }
            }
        }
    }
};


Scene.prototype.removeSprites = function () {
    for (var i = 0; i < this.toRemove.length; i++) {
        var idx = this.sprites.indexOf(this.toRemove[i]);
        if (idx >= 0) {
            this.sprites.splice(idx, 1);
        }
    }
    this.toRemove = [];
};

Scene.prototype.intervalo = function () {
    mensageTime.text = "TEMPO:" + exibeTexto(Math.floor(tempo -= dt));
}
Scene.prototype.desenharMapa = function () {
    this.map.desenhar(this.ctx);
}
Scene.prototype.desenharMuro = function () {
    this.map.desenhaMuro(this.ctx);
}

Scene.prototype.passo = function (dt) {
    this.limpar();
    this.desenharMapa();
    this.desenhar();
    this.atualizar();
    switch (this.estado) {
        case EstadoCena.CARRREGANDO:
            var prog = this.assets.progresso();
            if (prog < 100.0) {
              //  console.log("Carregando...");
                mensageCarregando.visible = true;
                mensageCarregado.visible = false;
            } else {
               // console.log("Carregado.");
                mensageCarregando.visible = false;
                mensageCarregado.visible = true;
                this.estado = EstadoCena.AGUARDA_INICIO;
            }

            break;
        case EstadoCena.EM_JOGO:
            if (input.teclas.end || input.joysticks[0].buttons[3].pressed) {
                this.estado = EstadoCena.PAUSA;
            }
            this.posPasso(dt);
            break;
        case EstadoCena.PAUSA:
            if ((input.teclas.enter || input.joysticks[0].buttons[1].pressed) && this.estado != EstadoCena.AGUARDA_INICIO)  {
                this.estado = EstadoCena.EM_JOGO;
                mensagePausa.visible = false;
               //this.assets.pause("little");
               this.pausarMusica("little")
              //  console.log("volta em jogo");
            } else {
                mensageCarregado.visible = false;
                mensagePausa.visible = true;
            }
            break;
        case EstadoCena.FIM_TEMPO:

            break;
        case EstadoCena.INICIA_JOGO:

            break;
        case EstadoCena.GAME_OVER:
            
            break;
        case EstadoCena.AGUARDA_INICIO:
            if ((input.teclas.enter ) && this.estado != EstadoCena.PAUSA)     {
                this.estado = EstadoCena.EM_JOGO;
                mensageInicio.visible = false;
                mensageInicio2.visible = false;
                mensageInicio3.visible = false;
                this.tocarMusica("little");
                //this.assets.play("little");
                console.log("Em jogo!!!");
             
            } else {
                mensageInicio.visible = true; 
                mensageInicio2.visible = true;
                mensageInicio3.visible = true;
                mensageCarregado.visible = false;
            }

            break;
        default:
            break;
    }
    //this.desenhar();
}

Scene.prototype.posPasso = function (dt) {
   // this.tocarMusica();
    this.comportar();
    this.intervalo();
    this.mover(dt);
    this.checaColisao();
    this.removeSprites();
}