import { useState } from 'react';
{/* Componentes */}
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';


{ /* imagenes */ }
import imgClima from './assets/weat.jpg'
import imgPoke from './assets/poke1.png'
import imgRick from './assets/rick.jpg'
import imgPort from './assets/port.avif'

function App() {
  /* estado para ver si el menu movil esta abierto */
const [menuAbierto, setMenuAbierto] = useState(false); 
 /* state para el idioma */
 const [idioma, setIdioma] = useState("ES");
 { /* lista de proyectos */}
const proyectos = [
    {
      id: 1,
      tituloES: "Portafolio",
      tituloEN: "Portfolio",
      clicES: "(Dar click en la Imagen.)",
      clicEN: "(Press on the image)",
      resumenES: "Portafolio de react con las ultimas Tecnologías.",
      resumenEN: "React Portfolio with the latest technologies",
      imagen: imgPort,
      linkRepo: "https://github.com/SHARINFEST",
      linkWeb: "https://portafolio-profesional-y-responsivo.vercel.app/",
      button1ES: 'Código',
      button1EN: 'Code',
      button2ES: 'es este',
      button2EN: 'This is it',
      tecnologiasES: "Java Script (ES+) • Arquitectura MVC React • Tailwind CSS • Vitest • Arquitectura de Componentes • Automatización con n8n • Webhooks • Bilingüe",
      tecnologiasEN: "Java Script (ES+) • Architecture MVC React • Tailwind CSS • Vitest • Component Architecture • n8n Automation • Webhooks • Bilingual",
      descES: "Diseño y desarrollo de una plataforma web bilingüe y responsiva que sirve como portafolio profesional. Implementa una arquitectura modular de componentes altamente optimizados con Tailwind CSS, un motor de pruebas unitarias automatizadas con Vitest para control de calidad, y un pipeline de automatización mediante webhooks conectados a n8n para procesar y redirigir los datos de contacto en tiempo real sin depender de un backend tradicional.",
      descEN: "Design and development of a bilingual, responsive web platform serving as a professional portfolio. It implements a highly optimized modular component architecture using Tailwind CSS, an automated unit testing suite with Vitest for quality assurance, and an automation pipeline via webhooks connected to n8n to process and reroute contact data in real time without relying on a traditional backend."

    },
    {
      id: 2,
      tituloES: "Aplicacion del clima",
      tituloEN: "Wheater App",
      clicES: "(Dar click en la Imagen. Necesita permiso de ubicación)",
      clicEN: "(Press on the image. Location permission required.)",
      resumenES: "Aplicación que te da el clima y Ubicación en tiempo real.",
      resumenEN: "An app that gives you real time weather and location.",
      imagen: imgClima ,
      linkRepo: "https://github.com/SHARINFEST/Weather_App",
      linkWeb: "https://incomparable-quokka-33d099.netlify.app/",
      button1ES: 'Código',
      button1EN: 'Code',
      button2ES: 'Sitio web',
      button2EN: 'Website',
      tecnologiasES: "Java Script (ES+) ° Arquitectura MVC ° Fetch Api ° Geo Localización ° CSS3",
      tecnologiasEN: "Java Script (ES+) ° Architecture MVC ° Fetch Api ° Geo Location ° CSS3",
      descES: "Aplicación meteorológica que implementa el patrón de arquitectura MVC para desacoplar la lógica de negocio de la interfaz de usuario. Consume de forma asíncrona la API de OpenWeather y utiliza la API de Geolocalización nativa del navegador para renderizar datos climáticos en tiempo real basados en la ubicación del usuario, optimizando el manejo de errores en llamadas de red.",
      descEN: "Weather application implementing the MVC architectural pattern to decouple business logic from the user interface. It asynchronously consumes the OpenWeather API and utilizes the browser's native Geolocation API to render real-time weather data based on the user's location, optimizing error handling for network calls."
    },
    {
      id: 3,
      tituloES: "Pokédex",
      tituloEN: "Poke Api",
      clicES: "(Dar click en la Imagen.)",
      clicEN: "(Press on the image.)",
      resumenES: "Web para encontar tu pokémon favorito",
      resumenEN: "App to find your favorite Pokemon.",
      imagen: imgPoke ,
      linkRepo: "https://github.com/SHARINFEST/pokedex_api_react",
      linkWeb: "https://celadon-marshmallow-dd3063.netlify.app/",
      button1ES: 'Código',
      button1EN: 'Code',
      button2ES: 'Sitio web',
      button2EN: 'Website',
      tecnologiasES: "Java Script (ES+) • React • Redux Toolkit • Gestión de estados • Axios • PokéAPI • User Auth • Módulos de CSS3 ",
      tecnologiasEN: "React • Redux Toolkit • State Management • Axios • PokéAPI • User Auth • CSS Modules",
      descES: "Aplicación web full-featured orientada a la gestión de datos mediante Redux Toolkit para el control de un estado global centralizado. Cuenta con un módulo de autenticación de usuarios para el inicio de sesión, renderizado asíncrono optimizado mediante Axios para el consumo de la PokéAPI, y una arquitectura modular que permite filtrar elementos en tiempo real y persistir una listas dinámica.",
      descEN: "Full-featured web application focused on data management using Redux Toolkit for centralized global state control. It features a user authentication module for login, optimized asynchronous rendering using Axios to consume the PokéAPI, and a modular architecture that enables real-time filtering and persistence of a dynamic favorites list."
    },
    {
      id: 4,
      tituloES: "Wiki de Rix y Morty",
      tituloEN: "Rick and morty app Wiki",
      clicES: "(Dar click en la Imagen.)",
      clicEN: "(Press on the image.)",
      resumenES: "Una wiki dinamica",
      resumenEN: "A dynamic Wiki.",
      imagen: imgRick ,
      linkRepo: "https://github.com/SHARINFEST/Rick_and_Morty_wiki-App",
      linkWeb: "https://brilliant-hotteok-c3476d.netlify.app/",
      button1ES: 'Código',
      button1EN: 'Code',
      button2ES: 'Sitio web',
      button2EN: 'Website',
      tecnologiasES: " Java Script (ES+) • React • Redux Toolkit • Gestión de estados • React • Context API / State Hooks • Filtros dinamicos • Integración de REST API  •  Layouts Responsivos",
      tecnologiasEN: "React • Context API / State Hooks • Dynamic Filtering • REST API Integration • Tailwind CSS • Responsive Layouts",
      descES: "Wiki interactiva desarrollada en React que implementa un sistema robusto de filtros cruzados dinámicos (estado, especie, género) y búsqueda en tiempo real mediante el consumo de la API de Rick and Morty. Destaca por una arquitectura de componentes altamente modulares, gestión eficiente de paginación asíncrona y un diseño de rejilla responsiva optimizado para la experiencia de usuario en cualquier dispositivo..",
      descEN: "Interactive Wiki built with React, featuring a robust dynamic cross-filtering system (status, species, gender) and real-time search by consuming the Rick and Morty API. It stands out for its highly modular component architecture, efficient asynchronous pagination management, and a responsive grid layout optimized for user experience across all devices."
    },

  ];



  return (
    <>
      <div id='home' className='min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col'>
        <Navbar
          idioma={idioma}
          setIdioma={setIdioma}
          menuAbierto={menuAbierto}
          setMenuAbierto={setMenuAbierto} 
        />
        
        {/* SECCIÓN 1: HERO PORTADA */}
        <header 
          id="inicio"
          className="relative h-[80vh] bg-fixed bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80')` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>
          
          <div className="relative z-10 text-center px-6 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              {idioma === "ES" ? "Desarrollador Fullstack" : "Fullstack Developer"}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              {idioma === "ES" 
                ? "Ingeniero en sistemas enfocado en la creación de aplicaciones web optimizadas y seguras."
                : "Systems engineer focused on building optimized and secure web applications."}
            </p>
            
            <a 
              href= { idioma === 'ES' ? '/Cvdef2026.pdf' : '/Cvengdef26.pdf'} 
              download="CV_Alfredo.pdf"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-gray-950 px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors shadow-lg"
            >
              📂 {idioma === "ES" ? "Descargar CV" : "Download CV"}
            </a>
          </div>
        </header>

        {/* CONTENEDOR PRINCIPAL */}
        <main  id='about_me' className='bg-gray-950 text-white min-h-screen p-8 selection:bg-emerald-500 selection:text-gray-900'>
          
          {/* SECCIÓN 2: SOBRE MÍ (¡Agregado aquí!) */}
          <About  idioma={idioma} />

          {/* SECCIÓN 3: HABILIDADES (¡Agregado aquí!) */}
          <div id='skills'>
          <Skills idioma={idioma} />
           </div>
          {/* SECCIÓN 4: PROYECTOS */}
          <section id="proyectos" className="py-20 px-6 max-w-6xl mx-auto w-full">
            <h2 className="text-3xl font-bold text-emerald-400 font-mono flex items-center gap-2 justify-center md:justify-start mb-12">
              <span className="text-gray-500 text-xl">03.</span>
              {idioma === "ES" ? "Mis Proyectos" : "My Projects"}
            </h2>

            <div id='proyectos' className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proyectos.map((proyecto) => (
                <ProjectCard 
                  key={proyecto.id} 
                  proyecto={proyecto} 
                  idioma={idioma} 
                />
              ))}
            </div>
          </section>

          {/* SECCIÓN SEPARADORA INTERMEDIA */}
          <div 
            className="h-48 bg-fixed bg-cover bg-center flex items-center justify-center relative my-12 rounded-xl overflow-hidden"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80')` }}
          >
            <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-xs"></div>
            <span className="relative z-10 text-lg md:text-xl font-mono italic text-emerald-300 text-center px-4 max-w-2xl">
              {idioma === "ES" ? '"El código limpio siempre parece que fue escrito por alguien a quien le importa."' : '"Clean code always looks like it was written by someone who cares."'}
            </span>
          </div>

          {/* SECCIÓN 5: CONTACTO  */}
         
<div id='contact' className="h-48 bg-fixed bg-cover bg-center ...">
  {/* Contenido de tu frase */}
</div>

{/* SECCIÓN 5: CONTACTO Y REDES AVANZADO */}
<Contact idioma={idioma} />

        </main>
      </div>
    </>
  );
}

export default App;
