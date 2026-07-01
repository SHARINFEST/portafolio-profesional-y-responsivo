export default function Navbar({ idioma, setIdioma, menuAbierto, setMenuAbierto }) {
  return (
    <>
   {/*NAVBAR/ MENU DE NAVEGACION PARA MOVILES */}
      <nav className='bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center sticky top-0 z-50 w-full'>
        <div className='text-xl font-bold text-emerald-400'>Alfredo.dev</div>
        {/* MENU DE NAVEGACION para escritorio */}
           <div className='hidden md:flex items-center gap-6 font-meduim'>
            <a href='#home' className='hover:text-emerald-400 transition-colors'>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z"></path><path fill="#C5CAE9" d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z"></path><path fill="#B71C1C" d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z"></path><path fill="#D84315" d="M18 28H30V44H18z"></path><path fill="#01579B" d="M21 17H27V23H21z"></path><path fill="#FF8A65" d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"></path>
</svg></a>
            <a href='#about_me' className='hover:text-emerald-400 transition-colors'>
              {idioma === "ES" ? "Sobre mi" : "About me"}</a>
              <a href='#skills' className='hover:text-emerald-400 transition-colors'>
              {idioma === "ES" ? "Habilidades" : "Skills"}</a>
            <a href='#proyectos' className='hover:text-emerald-400 transition-colors'>
              {idioma === "ES" ? "Proyectos" : "Projects"}</a>
            <a href='#contacto' className='hover:text-emerald-400 transition-colors'>
             {idioma === 'ES' ? "Contactame" : 'Contact me'}</a>
            <button onClick={() => setIdioma(idioma ==="ES" ? "EN": "ES" )}
      className="bg-emerald-700 text-black px-4 py-2 rounded font-bold hover:bg-emerald-600 transition-colors"
      >
        🌐
        {idioma}
      </button>
           </div>
           {/* MENU DE NAVEGACION para moviles */}
           <button onClick={()=> setMenuAbierto(!menuAbierto)}
            className='md:hidden text-2xl focus:outline-none'>
              {menuAbierto ? '❌' : '☰'}
           </button>
           
           {menuAbierto && (
            <div className='absolute top-full left-0 w-full shadow-2xl md:hidden bg-gray-800 border-b border-gray-700 flex flex-col p-4 gap-4 font-semibold text-center animate-fade-in'>
              <a href='#home' onClick={() => setMenuAbierto(false)}>
               {idioma === 'ES' ? "Inicio" : "Home"}</a>
              <a href='#about_me' onClick={() => setMenuAbierto(false)}>
               {idioma === 'ES' ? "Acerca de mi" : "About me"}     </a>
               <a href='#skills' onClick={() => setMenuAbierto(false)}>
                {idioma === 'ES' ? 'Habilidades' : 'Skills'}</a>
              <a href='#proyectos' onClick={() => setMenuAbierto(false)}>
                {idioma === 'ES' ? "Proyectos" : 'Projects'}</a>
              <a href='#contact' onClick={() => setMenuAbierto(false)}>
                {idioma === 'ES' ? 'Contactame' : 'Contact me'}</a>
              <button
              onClick={() => {setIdioma(idioma === "ES" ? "EN" : "ES"); setMenuAbierto(false);}}
              className='bg-gray-700 py-2 rounded'>
                {idioma === "ES" ? 'idioma' : 'Lenguage'}: {idioma}
                
              </button>
              
            </div>
            
           ) } </nav>
    </>
  );
}