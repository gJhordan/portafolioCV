import { useState, useEffect } from 'react';

function Escribir({ textos, children }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const currentText = textos[index];

    const typingSpeed = isDeleting ? 75 : 150; // Velocidad de escritura y borrado
    const timeout = setTimeout(() => {
      if (isDeleting) {
        console.log(`Borrando: ${displayText}`);
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % textos.length);
          console.log(`Cambiando a: ${textos[index]}`);
          // Esperar 5 segundos antes de escribir el siguiente texto
          setTimeout(() => {
            console.log('Esperando 5 segundos antes de comenzar a escribir nuevamente.');
            setIsDeleting(true);
          }, 5000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          console.log(`Texto completo: ${currentText}`);
          // Esperar 5 segundos antes de empezar a borrar
          setTimeout(() => {
            console.log('Esperando 5 segundos antes de empezar a borrar.');
            setIsDeleting(true);
          }, 5000);
        }
      }
    }, typingSpeed);

    // Manejar la visibilidad del cursor
    const cursorTimeout = setTimeout(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(cursorTimeout);
    };
  }, [displayText, index, isDeleting, textos]);

  return (
    <div>
      {children}
      <p className="inline">
        {displayText}
        {cursorVisible && <span className="text-3xl w-8 inline-block">|</span>} {/* Cursor */}
      </p>
    </div>
  );
}

export default Escribir;
