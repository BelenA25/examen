class Monedas {
  constructor(dinero) {
    this.dinero = dinero;
    this.cambio = 0;
    this.monedasDisponibles = [5, 2, 1];
  }
  combinacionesDos() {
    for (let i = 0; i <= this.monedasDisponibles.length; i++) {
      for (let j = 0; j <= this.monedasDisponibles.length; j++) {
        if (this.monedasDisponibles[j] + this.monedasDisponibles[i] == this.dinero) {
          this.cambio = [this.monedasDisponibles[j], this.monedasDisponibles[i]];
        }
      }
    }
  }
  combinacionesTres() {
    for (let i = 0; i <= this.monedasDisponibles.length; i++) {
      for (let j = 0; j <= this.monedasDisponibles.length; j++) {
        if (this.monedasDisponibles[j] + this.monedasDisponibles[j] + this.monedasDisponibles[i] == this.dinero) {
          if (this.cambio == 0) {
            this.cambio = [this.monedasDisponibles[j], this.monedasDisponibles[j], this.monedasDisponibles[i]];
          }
        }
      }
    }
  }
  cambiar() {
    for (let i = 0; i <= this.monedasDisponibles.length; i++) {
      if (this.dinero == this.monedasDisponibles[i]) {
        this.cambio = this.monedasDisponibles[i];
      }
      else {
        this.combinacionesDos();
        this.combinacionesTres();
      }
    }
  }
}

export default Monedas;
