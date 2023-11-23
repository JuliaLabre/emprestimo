abstract class SolicitacaoEmprestimo {
    constructor(
        protected id: number,
        protected nome: string,
        protected idade: number,
        protected valorEmprestimo: number,
        protected numeroParcelas: number,
        protected valorParcela: number,
        protected graduando: boolean,
        protected habilitacao: boolean,
        protected rendaMensal: number

    ) {
        this.id = id,
        this.nome = nome,
        this.idade = idade,
        this.valorEmprestimo = valorEmprestimo,
        this.numeroParcelas = numeroParcelas,
        this.valorParcela = valorParcela,
        this.graduando = graduando,
        this.habilitacao = habilitacao,
        this.rendaMensal = rendaMensal
    }

    public verificarIdade() {
        return this.idade >= 18;
    }

    public verificarValorTotal() {
        const valorTotalEsperado = this.numeroParcelas * this.valorParcela;
        return this.valorEmprestimo === valorTotalEsperado;
    }

    public receberNome(){
        return this.nome
    }
}

class emprestimoPessoal extends SolicitacaoEmprestimo {

    verificarRenda() {
        return this.rendaMensal >= 2500;
    }
}


class emprestimoAutomovel extends SolicitacaoEmprestimo {

    verificarGarantiasAutomovel() {
        return this.habilitacao === true && this.rendaMensal >= 3000
    }


}

class emprestimoEstudantil extends SolicitacaoEmprestimo {
    verificarGarantiasEstudantil() {
        return this.graduando === true && this.rendaMensal >= 1500 && this.idade >= 30
    }
}

const pessoal = new emprestimoPessoal(1, "Julia", 26, 3000, 10, 300, true, false, 5000)

if (pessoal != undefined) {
    const nome = pessoal.receberNome()
    if ((pessoal.verificarValorTotal() && pessoal.verificarIdade() && pessoal.verificarRenda()) === true) {
        console.log(`Empréstimo Pessoal: Aprovado para ${nome}`)
    } else {
        console.log(`${nome} você não tem os requesitos para um empréstimo no momento`)
    }
}


const automovel = new emprestimoAutomovel(2, "Jose", 30, 3000, 11, 300, true, false, 5000)

if (automovel != undefined) {
    const nome = automovel.receberNome()
    if ((automovel.verificarValorTotal() && automovel.verificarIdade() && automovel.verificarGarantiasAutomovel()) === true) {
        console.log(`Empréstimo Automóvel: Aprovado para ${nome}`)
    } else {
        console.log(`${nome} você não tem os requesitos para um empréstimo no momento`)
    }
}

const estudantil = new emprestimoEstudantil(2, "Aline", 30, 2000, 10, 200, true, true, 2000)

if (estudantil != undefined) {
    const nome = estudantil.receberNome()
    if ((estudantil.verificarValorTotal() && estudantil.verificarIdade() && estudantil.verificarGarantiasEstudantil()) === true) {
        console.log(`Empréstimo Estudantil: Aprovado para ${nome}`)
    } else {
        console.log(`${nome} você não tem os requesitos para um empréstimo no momento`)
    }
}
/*a ideia é , receber o empréstimo, validar idade e se as parcelas e valor da parcela está de acordo com o total do emprestimo , estando correto perguntar o tipo de emprestimo que a pessoa quer fazer e validar de acordo e lançar em um json, daí puxar a lista de aprovados e reprovados identificando o nome e o tipo de empréstimo
Por falta de tempo e segurança, só consegui entregar isso mesmo.
Me senti mais segura fazendo o UML no drawio do que codificando de fato devido aos processos das aulas
*/