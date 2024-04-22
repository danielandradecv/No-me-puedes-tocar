const objeto = document.getElementById('objeto');

objeto.addEventListener('pointerdown', (event) => {
    // Obtener la posición inicial del objeto y del puntero
    const initialObjX = objeto.offsetLeft;
    const initialObjY = objeto.offsetTop;
    const initialPointerX = event.clientX;
    const initialPointerY = event.clientY;

    // Calcular la diferencia entre la posición inicial del objeto y del puntero
    const offsetX = initialPointerX - initialObjX;
    const offsetY = initialPointerY - initialObjY;

    // Función que se ejecutará cuando se mueva el puntero
    const moveObject = (moveEvent) => {
        // Calcular la nueva posición del objeto
        const newX = moveEvent.clientX - offsetX;
        const newY = moveEvent.clientY - offsetY;

        // Mover el objeto a la nueva posición
        objeto.style.left = `${newX}px`;
        objeto.style.top = `${newY}px`;
    };

    // Agregar evento de movimiento al objeto
    document.addEventListener('pointermove', moveObject);

    // Función que se ejecutará cuando se suelte el puntero
    const releaseObject = () => {
        // Remover el evento de movimiento del objeto
        document.removeEventListener('pointermove', moveObject);
        // Remover el evento de soltar el puntero
        document.removeEventListener('pointerup', releaseObject);
    };

    // Agregar evento de soltar el puntero al documento
    document.addEventListener('pointerup', releaseObject);
});