import  '../stylesheets/Testimonio.css'
import Testimonio from './Testimonio';

const testimonios = [
    {
        nombre: "Shawn Wang",
        pais: "Singapore",
        imagen: "Shawn",
        cargo: "Software Engineer",
        empresa: "Amazon",
        testimonio: "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <b>freeCodeCamp changed my life</b>."
    },
    {
        nombre: "Sarah Chim",
        pais: "Nigeria",
        imagen: "Sarah",
        cargo: "Software Engineer",
        empresa: "ChatDesk",
        testimonio: "<b>freeCodeCamp was the gateway to my career as a software developer.</b> The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
    },
    {
        nombre: "Emma Bostian",
        pais: "Sweden",
        imagen: "emma",
        cargo: "Software Engineer",
        empresa: "Spotify",
        testimonio: "I've always struggled with learning JavaScript. <b>I've taken many courses but freeCodeCamp's course was the one which stuck.</b> Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
    },
];


function ListadoTestimonios() {
  return (
    <div className='Contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {testimonios.map((testimonio) => (
            <Testimonio
                nombre={testimonio.nombre}
                pais={testimonio.pais}
                imagen={testimonio.imagen}
                cargo={testimonio.cargo}
                empresa={testimonio.empresa}
                testimonio={testimonio.testimonio}
                />
        ))}
    </div>
    );
}

export default ListadoTestimonios;
