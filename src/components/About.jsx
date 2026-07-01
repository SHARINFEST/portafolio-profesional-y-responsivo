import React from 'react';

export default function About({ idioma }) {
  return (
    <section id="sobre-mi" className="max-w-4xl mx-auto py-16 px-4">
      <div className="border border-gray-800 bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
        
        {/* Título de la Sección */}
        <h2 className="text-3xl font-bold mb-6 text-emerald-400 font-mono flex items-center gap-2">
          <span className="text-gray-500 text-xl">01.</span> 
          {idioma === "ES" ? "Sobre Mí" : "About Me"}
        </h2>

        {/* Texto Descriptivo */}
        <p className="text-gray-300 text-base leading-relaxed mb-6">
          {idioma === "ES" ? (
            <>
              Soy <strong> Desarrollador Full-Stack</strong> enfocado en la construcción de aplicaciones web escalables, eficientes y seguras. Mi experiencia previa en el sector financiero y consultoría tecnológica me ha permitido dominar la resolución de problemas complejos, la optimización de código y la implementación de arquitecturas limpias.
            </>
          ) : (
            <>
              I am a <strong>Full-Stack Developer</strong>  focused on building scalable, efficient, and secure web applications. My previous experience in the financial sector and IT consulting has enabled me to master complex problem-solving, code optimization, and clean architecture implementations.
            </>
          )}
        </p>

        <p className="text-gray-300 text-base leading-relaxed">
          {idioma === "ES" ? (
            <>
              Además de mi pasión por el frontend con <strong>React</strong> y el backend con <strong>Node.js</strong>, poseo un fuerte interés en la ciberseguridad y el análisis de vulnerabilidades, lo que me impulsa a escribir código pensando siempre en la protección de datos y la integridad del sistema.
            </>
          ) : (
            <>
              Alongside my passion for frontend development with <strong>React</strong> and backend with <strong>Node.js</strong>, I hold a strong interest in cybersecurity and vulnerability analysis, driving me to write code with a constant focus on data protection and system integrity.
            </>
          )}
        </p>
        
      </div>
    </section>
  );
}