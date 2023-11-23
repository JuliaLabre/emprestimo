abstract class SolicitacaoEmprestimo {
    constructor (
        protected id: number,
        protected nome: string,
        protected idade: number,
        protected valorEmprestimo: number,
        protected numeroParcelas: number,
        protected valorParcela: number,
        protected graduando: boolean,
        protected habilitacao:boolean,
        protected rendaMensal:number

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

    public verificarIdade(){
        if (this.idade >= 18){
            return true;
        } else {
            return false;
        }
    }

   public verificarValorTotal(){
        const valorTotalEsperado = this.numeroParcelas * this.valorParcela;
        if (this.valorEmprestimo === valorTotalEsperado){
            return true;
        } else {
            return false;
        }
    }
}

class emprestimoPessoal extends SolicitacaoEmprestimo{

    verificarRenda(){
        return this.rendaMensal >= 2500;
}
}


class emprestimoAutomovel extends SolicitacaoEmprestimo{
   
    verificarGarantiasAutomovel(){
        return this.habilitacao === true && this.rendaMensal >= 3000;
    }
    

}

class emprestimoEstudantil extends SolicitacaoEmprestimo{
    verificarGarantiasEstudantil(){
        return this.graduando === true && this.rendaMensal >= 1500;
    }
 }
 

const emprestimo = new emprestimoPessoal (1,"Julia",26,3000,10,300,true,false,5000)
   
if(emprestimo != undefined){
    console.log("Idade:", emprestimo.verificarIdade());
}

