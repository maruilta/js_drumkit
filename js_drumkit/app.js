//Tenemos un event listener que va a escuchar el keydown presionado, 
  // y la función nos va a devolver un evento asociado a ese valor.
    window.addEventListener("keydown", function(e){
      //declara la variable audio y 
      //usa queryselector solo porque sólo busca un elemento.
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      //declarala variable key, 
      //selecciona el elemento contenedor (div) para poder darle 
      //animacion al contenedor cuando se ejecuta el audio.
      //en el queryselector usa .key porque es una clase!
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return; //hace que la funcion no corra toda seguido
      audio.currentTime = 0; //rebobina desde cero
      audio.play();

      //agrega la clase playing para darle estilo cuando suena. Lo hace de esta forma porque usa vainilla y no jquery!
      key.classList.add('playing');
    });

    //para hacer que la clase sólo sea transitoria declaramos una función y seleccionamos las keys:
    function removeTransition(e){
      if(e.propertyName !== 'transform') return;
      //usamos this para remover la clase que pusimos al div contenedor
      this.classList.remove('playing');
    }
    const keys = document.querySelectorAll('.key');
    //Usamos un for each para que recorra todo el arreglo
    keys.forEach( key => key.addEventListener('transitionend', removeTransition));