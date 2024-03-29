function AssetsManager() {
    this.aCarregar = 0;
    this.carregadas = 0;
    this.images = {};
    this.audios = {};
    this.channels = [];
    this.MAX_CHANNELS = 20;
    for (var i = 0; i < this.MAX_CHANNELS; i++) {
        this.channels[i] = {
            audio: new Audio(),
            fim: -1
        };
    }
}

AssetsManager.prototype.loadImage = function (key, url) {
    console.log(`Carregando imagem ${url}...`);

    this.aCarregar++;
    var imagem = new Image();
    imagem.src = url;
    this.images[key] = imagem;
    var that = this;
    imagem.addEventListener("load", function () {
        that.carregadas++;
        console.log(`Imagem ${that.carregadas}/${that.aCarregar} ${key}: ${url} carregada.`);
    });
}

AssetsManager.prototype.img = function (key) {
    return this.images[key];
}

AssetsManager.prototype.progresso = function () {
    if (this.aCarregar != 0) {
        return this.carregadas / this.aCarregar * 100.0;
    } else return 0.0;

}


AssetsManager.prototype.loadAudio = function (key, url) {
    var audio = new Audio();
    audio.src = url;
    audio.load();
    this.audios[key] = audio;
    
}

AssetsManager.prototype.play = function (key) {
    if (!this.audios[key]) {
        throw new Error(`Chave de audio inválida: ${key}!`);
    }
    for (var i = 0; i < this.MAX_CHANNELS; i++) {
        var agora = new Date();
        if (this.channels[i].fim < agora.getTime()) {
            this.channels[i].audio.src = this.audios[key].src;
            this.channels[i].fim = agora.getTime() + this.audios[key].duration * 1000;
            this.channels[i].audio.play();
            break;
        }

    }
}
AssetsManager.prototype.pause = function (key) {
    if (!this.audios[key]) {
        throw new Error(`Chave de audio inválida: ${key}!`);
    }
    for (var i = 0; i < this.MAX_CHANNELS; i++) {
        var agora = new Date();
        if (this.channels[i].fim < agora.getTime()) {
            this.channels[i].audio.pause();
            break;
        }

    }
}
/*
AssetsManager.prototype.pause = async function (key) {
    if (!this.audios[key]) {
        throw new Error(`Chave de audio inválida: ${key}!`);
    }
    for (var i = 0; i < this.MAX_CHANNELS; i++) {
       await this.channels[i].audio.pause();
    }
}
*/