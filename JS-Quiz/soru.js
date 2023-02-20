function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d"),
    new Soru("5-Hangisi backend kapsamında değerlendirilir?", { a: "css", b: "html", c: "javascipt", d: "node.js" }, "d"),
    new Soru("5-Hangisi javascript frameworkü değildir ?", { a: "Dart", b: "Vue", c: "Angular", d: "Ember" }, "a")
];