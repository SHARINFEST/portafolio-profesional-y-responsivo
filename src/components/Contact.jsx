import React, { useState } from 'react';

export default function Contact({ idioma }) {
  // Estado para controlar los campos del formulario
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se conectará la lógica del webhook de n8n más adelante
    console.log("Datos listos para enviar a n8n:", formData);
    alert(idioma === "ES" ? "¡Mensaje listo! (Conexión a n8n próximamente)" : "Message ready! (n8n connection coming soon)");
  };

  return (
    <section id="contacto" className="max-w-5xl mx-auto py-20 px-4">
      {/* Título de la Sección */}
      <h2 className="text-3xl font-bold mb-10 text-emerald-400 font-mono flex items-center gap-2 justify-center md:justify-start">
        <span className="text-gray-500 text-xl">04.</span>
        {idioma === "ES" ? "Contacto y Redes" : "Contact & Networks"}
      </h2>

      {/* Contenedor de 2 Columnas (Redes a la izquierda, Formulario a la derecha) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* COLUMNA IZQUIERDA: TEXTO Y REDES */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-100 font-sans">
            {idioma === "ES" ? "¿Tienes un proyecto en mente?" : "Let's build something together"}
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            {idioma === "ES" 
              ? "Estoy disponible para vacantes de desarrollo de software (Fullstack / Frontend / Backend) y proyectos de ingeniería. Si tienes alguna duda o quieres hablar de código, ¡escríbeme!"
              : "I am available for software development roles (Fullstack / Frontend / Backend) and engineering projects. If you have any questions or just want to talk about code, get in touch!"}
          </p>

          {/* Enlaces a Redes Profesionales */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/tu-perfil" // ← Cambia por tu link real
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-gray-950 px-5 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-emerald-500/5 text-sm"
            >
              💼 LinkedIn
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/SHARINFEST" // ← Tu GitHub real
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-700 bg-gray-900 text-gray-100 hover:border-gray-500 px-5 py-3 rounded-xl font-bold transition-all duration-300 text-sm"
            >
              💻 GitHub
            </a>
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO DE CONTACTO */}
        <form 
          onSubmit={handleSubmit} 
          className="border border-gray-800 bg-gray-900/40 rounded-2xl p-6 space-y-4 backdrop-blur-sm shadow-xl"
        >
          {/* Campo Nombre */}
          <div>
            <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
              {idioma === "ES" ? "Nombre" : "Name"}
            </label>
            <input 
              type="text" 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
              placeholder="John Doe"
            />
          </div>

          <div>
  {/* Campo numero de telefono */}
  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
    {idioma === "ES" ? "Teléfono" : "Phone Number"}
  </label>
  <input 
    type="tel" 
    name="numero"
    value={formData.numero}
    onChange={handleChange}
    required
    className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
    placeholder="+52 5x xxxx xxxx"
  />
</div>

          {/* Campo Correo */}
          <div>
            <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
              {idioma === "ES" ? "Correo Electrónico" : "Email Address"}
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
              placeholder="john@example.com"
            />
          </div>

          {/* Campo Mensaje */}
          <div>
            <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
              {idioma === "ES" ? "Mensaje" : "Message"}
            </label>
            <textarea 
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm resize-none"
              placeholder={idioma === "ES" ? "Hola Alfredo, me interesa tu perfil..." : "Hi Alfredo, I am interested in your profile..."}
            ></textarea>
          </div>

          {/* Botón Enviar */}
          <button 
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold py-3 px-6 rounded-xl transition-colors uppercase tracking-wider text-sm shadow-md shadow-emerald-500/10"
          >
            🚀 {idioma === "ES" ? "Enviar Mensaje" : "Send Message"}
          </button>
        </form>

      </div>

      {/* Footer de derechos de autor al final de la sección */}
      <p className="text-center text-xs text-gray-600 mt-20">
        © 2026 Alfredo.dev. All rights reserved.
      </p>
    </section>
  );
}