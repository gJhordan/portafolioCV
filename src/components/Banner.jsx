import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Escribir from './Escribir'; // Asegúrate de la ruta correcta
import logo from '../img/Logo.png';
import Desvanecer from './Desvanecer'; 
function Banner() {
  const textos = ["Jhordan Alzamora", "Programador Backend", "Analista de Datos"];

  return (
    <div className="bg-[var(--color-primary)] text-white py-6 px-10 flex justify-between items-center">
      {/* Nombre a la izquierda con efecto de escribir */}
      <Desvanecer>
        <h1 className="text-4xl font-bold font-montserrat">
          <Escribir textos={textos}>
            <span className="text-4xl font-bold"> </span>
          </Escribir>
        </h1>
      </Desvanecer>

      {/* Logo en el centro */}
      <Desvanecer>
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-20 w-25" />
        </div>
      </Desvanecer>

      {/* Información de contacto a la derecha */}
      <div className="flex space-x-6">
        {/* Enlace de WhatsApp */}
        <Desvanecer>
          <a 
            href="https://wa.me/51910451506" 
            className="flex items-center space-x-2 transform transition-transform hover:scale-110 text-[var(--color-text-button)]" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="text-lg font-montserrat">910451506</span>
          </a>
        </Desvanecer>
        
        {/* Enlace de correo electrónico */}
        <Desvanecer>
          <a 
            href="mailto:dasiongmora03@gmail.com" 
            className="flex items-center space-x-2 transform transition-transform hover:scale-110 text-[var(--color-text-button)]"
          >
            <FaEnvelope className="text-2xl" />
            <span className="text-lg font-montserrat">dasiongmora03@gmail.com</span>
          </a>
        </Desvanecer>
      </div>
    </div>
  );
}

export default Banner;
