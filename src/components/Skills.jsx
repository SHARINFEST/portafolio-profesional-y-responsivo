import React from 'react';

export default function Skills({ idioma }) {
  // Categorías de tecnologías
  const categorias = [
    {
      tituloES: "Frontend y Programación",
      tituloEN: "Frontend and Programming languege",
      techs: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "HTML5 / CSS3", "Axios / Fetch", "nextjs", 'html','JSX','Hooks','Router',"Python", "Java", "TypeScript", "Custom hooks", "Web Hooks", "CI/CD"]
    },
    {
      tituloES: "Backend & Bases de Datos",
      tituloEN: "Backend & Databases",
      techs: ["Node.js", "Express.js", "REST APIs", "SQL / PostgreSQL", "MVC Architecture", "Nestjs", "Postman"]
    },
    {
      tituloES: "Herramientas & Metodologías",
      tituloEN: "Tools & Methodologies",
      techs: ["Git / GitHub", "Vite", "ESLint", "Agile / Scrum", "Clean Code"]
    },
    {
      tituloES: "Áreas de Enfoque",
      tituloEN: "Focus Areas",
      techs: ["Cybersecurity Bases", "Vulnerability Analysis", "Network Security", "Linux / VirtualBox", "Data Analyst", "IA", "Machine Learning", "Automation", "n8n"]
    }
  ];

  return (
    <section id="habilidades" className="max-w-5xl mx-auto py-16 px-4">
      {/* Título de la Sección */}
      <h2 className="text-3xl font-bold mb-10 text-emerald-400 font-mono flex items-center gap-2 justify-center md:justify-start">
        <span className="text-gray-500 text-xl">02.</span>
        {idioma === "ES" ? "Habilidades Técnicas" : "Technical Skills"}
      </h2>

      {/* Separacion de Categorías (1 columna en cel, 2 en tablet, 4 en laptop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categorias.map((cat, index) => (
          <div 
            key={index} 
            className="border border-gray-800 bg-gray-900/30 rounded-xl p-5 hover:border-emerald-500/50 transition-colors duration-300 backdrop-blur-sm"
          >
            {/* Título de la categoría */}
            <h3 className="text-lg font-bold text-gray-200 mb-4 font-mono border-b border-gray-800 pb-2">
              {idioma === "ES" ? cat.tituloES : cat.tituloEN}
            </h3>

            {/* Lista de Badges/Tecnologías */}
            <ul className="flex flex-wrap gap-2">
              {cat.techs.map((tech, tIndex) => (
                <li 
                  key={tIndex} 
                  className="bg-gray-800/60 text-emerald-400 border border-gray-700/50 text-xs px-2.5 py-1 rounded-md font-medium tracking-wide"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}