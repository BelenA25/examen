class Monedas{
  constructor(dinero){
    this.dinero=dinero;
    this.cambio = 0;
  }
  cambiar(){
    if (this.dinero == 5){
      this.cambio = 5;
    }
  }
}

export default Monedas;
