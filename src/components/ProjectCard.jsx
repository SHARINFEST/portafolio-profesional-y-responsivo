export default function ProjectCard({ proyecto, idioma }) {
  return (
    <div className="flex flex-col gap-3">
    <div className="group relative h-64 rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gray-800
    active:opacity-100 focus:outline-none" tabIndex='0'>
  {/* Imagen del proyecto con efecto zoom al hacer hover */}
  <img 
  src={proyecto.imagen} 
  alt={idioma === "ES" ? proyecto.tituloES : proyecto.tituloEN} 
  
  className="w-full h-full object-cover transition-transform duration-1500 scale-100 group-hover:scale-130 group-focus:scale-130 group-active:scale-130"
/>

{/* Capa transparente con la información */}
<div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-6 text-center transition-all duration-1000
     opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100
     translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0">
    
    {/* TÍTULO DINÁMICO */}
    <h3 className="text-xl font-bold text-emerald-400 mb-2">
      {idioma === "ES" ? proyecto.tituloES : proyecto.tituloEN}
    </h3>
    
    {/* DESCRIPCIÓN RESUMIDA */}
    <p className="text-gray-300 text-sm mb-6">
      {idioma === "ES" ? proyecto.resumenES : proyecto.resumenEN}
    </p>
    
    {/* Botones de acción */}
    <div className="flex gap-4">
      <a 
        href={proyecto.linkRepo} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-emerald-500 text-emerald-300 hover:text-gray-800 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border border-emerald-500 hover:border-gray-600 transition-colors"
        
      >
        {idioma === 'ES' ? proyecto.button1ES : proyecto.button1EN}
      </a>
      <a 
        href={proyecto.linkWeb} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-emerald-500 hover:bg-gray-800 text-gray-950 hover:text-emerald-300 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border border-gray-600 hover:border-emerald-500 transition-colors"
    
      >
        {idioma === 'ES' ? proyecto.button2ES : proyecto.button2EN}
      
          </a>
        </div>
        </div>
        
      </div>
      <article className="mt-1 px-1">
        <h3 className="text-xl font-semibold text-emerald-400 mb-1">
            {idioma === 'ES' ? proyecto.tituloES : proyecto.tituloEN} {idioma === 'ES' ? proyecto.clicES : proyecto.clicEN}
        </h3>
        <p className="text-xs text-blue-400 font-mono mb-2">
            Tecnologias : {idioma === "ES" ? proyecto.tecnologiasES : proyecto.tecnologiasEN}
        </p>
        <p className="text-fuchsia-500 text-sm leading-relaxed">
            {idioma === 'ES' ? proyecto.descES : proyecto.descEN}
        </p>

      </article>
    </div>
  );
}