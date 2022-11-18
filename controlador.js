const Seleccion = () => {
    while (
      seleccion != 1 &&
      seleccion != 2 &&
      seleccion != 3 &&
      seleccion != 4 &&
      seleccion != 5
    ) {
      seleccion = parseInt(
        prompt(`Elige la seccion que quieres visualizar:
          1)mates
          2)bombillas
          3)termos
          4)Finalizar compra
          `)
      );
      Comp(seleccion);
      if (seleccion == 1) {
        mates();
        seleccion = 0;
      } else if (seleccion == 2) {
        bombillas();
        seleccion = 0;
      } else if (seleccion == 3) {
        termos();
        seleccion = 0;
      } else if ((seleccion = 4)) {
        Armado(mate, bombilla, termo);
      }
    }
    return seleccion;
  };
  
  const mates = () => {
    while (mate != 1 && mate != 2 && mate != 3 && mate != 4) {
      mate = parseInt(
        prompt(`Elige el modelo de mate que quieres comprar:
          1)camionero
          2)torpedo
          3)imperial
          4)Volver`)
      );
      Comp(mate);
      if (mate == 4) {
        Seleccion();
      }
    }
    if (mate == 1) mate = " camionero";
    else if (mate == 2) mate = " torpedo";
    else if (mate == 3) mate = " imperial";
    return mate;
  };
  
  const bombillas = () => {
    while (bombilla != 1 && bombilla != 2 && bombilla != 3 && bombilla != 4) {
        bombilla = parseInt(
        prompt(`Elige el modelo de bombilla que quieres comprar:
          1)pico de loro
          2)recta
          3)bombillon
          4)Volver`)
      );
      Comp(bombilla);
      if (bombilla == 4) {
        Seleccion();
      }
    }
    if (bombilla == 1) bombilla = " pico de loro";
    else if (bombilla == 2) bombilla = " recta";
    else if (bombilla == 3) bombilla = " bombillon";
    return bombilla;
  };
  
  const termos = () => {
    while (termo != 1 && termo != 2 && termo != 3 && termo != 4) {
      termo = parseInt(
        prompt(`Elige el modelo de termo Rigido que quieres comprar:
          1) stanley
          2) lumilagro
          3) coleman
          4)Volver`)
      );
      Comp(termo);
      if (termo == 4) {
        Seleccion();
      }
    }
    if (termo == 1) termo = " stanley";
    else if (termo == 2) termo = " lumilagro";
    else if (termo == 3) termo = " coleman";
    return termo;
  };
  
  
  
  const Comp = (opcion) => {
    if (
      opcion != 1 &&
      opcion != 2 &&
      opcion != 3 &&
      (opcion != 4) & (opcion != 5)
    ) {
      alert("No eligio una opcion correcta");
    }
  };
  
  let seleccion,mate,bombilla,termo,total
  let respuesta=(prompt("Quieres armar tu set matero? Elige Si o No"))
  respuesta=respuesta.toLowerCase()
  Inicio()