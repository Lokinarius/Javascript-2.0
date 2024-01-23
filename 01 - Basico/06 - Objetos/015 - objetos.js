function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        fala: function() {
            console.log(`${this.nome} ${this.sobrenome} está falando oi ...`);
            console.log(`minha idade é ${this.idade} anos`)
            },
        incrementaIdade:function(){
            this.idade++;
        }
        };
        //function factory
}

const pessoa1 = criaPessoa('William','Galvão',28);
const pessoa2 = criaPessoa('Ana','Pereira',24);
const pessoa3 = criaPessoa('Dante','Sparda', 48);
//console.log(pessoa1.nome, pessoa2.nome);

pessoa3.fala();