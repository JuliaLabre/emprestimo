"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.emprestimoEstudantil = exports.emprestimoAutomovel = exports.emprestimoPessoal = exports.SolicitacaoEmprestimo = void 0;
var SolicitacaoEmprestimo = /** @class */ (function () {
    function SolicitacaoEmprestimo(id, nome, idade, valorEmprestimo, numeroParcelas, valorParcela, rendaMensal) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.valorEmprestimo = valorEmprestimo;
        this.numeroParcelas = numeroParcelas;
        this.valorParcela = valorParcela;
        this.rendaMensal = rendaMensal;
        this.id = id,
            this.nome = nome,
            this.idade = idade,
            this.valorEmprestimo = valorEmprestimo,
            this.numeroParcelas = numeroParcelas,
            this.valorParcela = valorParcela,
            this.rendaMensal = rendaMensal;
    }
    return SolicitacaoEmprestimo;
}());
exports.SolicitacaoEmprestimo = SolicitacaoEmprestimo;
var emprestimoPessoal = /** @class */ (function (_super) {
    __extends(emprestimoPessoal, _super);
    function emprestimoPessoal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return emprestimoPessoal;
}(SolicitacaoEmprestimo));
exports.emprestimoPessoal = emprestimoPessoal;
new emprestimoPessoal(1, "Julia", 26, 3000, 10, 300, 5000);
console.log(emprestimoPessoal);
var emprestimoAutomovel = /** @class */ (function (_super) {
    __extends(emprestimoAutomovel, _super);
    function emprestimoAutomovel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return emprestimoAutomovel;
}(SolicitacaoEmprestimo));
exports.emprestimoAutomovel = emprestimoAutomovel;
var emprestimoEstudantil = /** @class */ (function (_super) {
    __extends(emprestimoEstudantil, _super);
    function emprestimoEstudantil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return emprestimoEstudantil;
}(SolicitacaoEmprestimo));
exports.emprestimoEstudantil = emprestimoEstudantil;
