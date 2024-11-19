function cuenta() {
  let saldo = 0;

  function ingresardinero(cantidad) {
    if (cantidad > 0) {
      saldo += cantidad;
      return `se han ingresado ${cantidad}`;
      // return "se ha ingresado ",cantidad
    } else {
      return "cantidad inválida para ingresar";
    }
  }

  function retirar(cantidad) {
    if (cantidad > saldo) {
      return "no hay suficiente dinero";
    } else if (cantidad > 0) {
      saldo -= cantidad;
      // saldo=saldo-cantidad
      //   return `se han retirado ${cantidad} el nuevo saldo que queda es : ${saldo}`;
      return `se han retirado ${cantidad} `;
      // console.log("return Se han retirado",cantidad, "El nuevo saldo es:",saldo")
    } else {
      return "error";
    }
  }

  function consultarsaldo() {
    return `el saldo actual es: ${saldo}`;
    //   return saldo;
    //   console.log(saldo)
  }

  return {
    ingresardinero,
    retirar,
    consultarsaldo,
  };
}

const usuariocuentaxd = cuenta();
console.log(usuariocuentaxd.ingresardinero(1000));
console.log(usuariocuentaxd.ingresardinero(2000));
console.log(usuariocuentaxd.ingresardinero(2000));
console.log(usuariocuentaxd.consultarsaldo());
console.log(usuariocuentaxd.retirar(300));
console.log(usuariocuentaxd.consultarsaldo());
