class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
      super(codigo, nota);
      this.frequencia = frequencia;
    }
  
    aprovado() {
      return this.nota >= 7 && this.frequencia >= 75;
    }
}