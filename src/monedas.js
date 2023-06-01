class Monedas{
  constructor(dinero){
    this.dinero=dinero;
    this.cambio = 0;
    this.monedasDisponibles = [5,2,1];
  }
  combinacionesDos()
  {
    if(this.monedasDisponibles[0] + this.monedasDisponibles[1] == this.dinero )
    {
      this.cambio = [this.monedasDisponibles[0], this.monedasDisponibles[1]];
    }
  }
  cambiar(){
    for(let i = 0; i <= this.monedasDisponibles.length; i++)
    {
      if (this.dinero == this.monedasDisponibles[i]){
      this.cambio = this.monedasDisponibles[i];
      }
      else
      {
        this.combinacionesDos();
        }
    }
  }
}

export default Monedas;
