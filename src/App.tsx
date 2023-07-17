




const App = () => {

  

  return (
    <body>
    <header  class="bg-black py-4 px-8 flex justify-start">
        <a href="#" class="text-white mr-4 underline">INICIO</a>
        <a href="#" class="text-white mr-4 underline">RESUMEN</a>
        <a href="#" class="text-white mr-4 underline">TRABAJOS</a>
        <a href="#" class="text-white mr-4 underline">ERROR404</a>
    </header>
    <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 ml-20">
      <p class="text-7xl mt-20">Ismael Corrales</p>
      <br></br>
      <p class="text-3xl mt-10">¡Bienvenido a mi portfolio!</p>
      <br></br>
      <p class="text-2xl">Aquí encontrarás un vistazo rápido a mi experiencia y habilidades en el mundo de la programación. Soy un apasionado desarrollador de software, siempre en busca de soluciones innovadoras y eficientes para los desafíos tecnológicos.</p>
    </div>
    <div class="flex justify-end w-full md:w-1/2">
      <img src="assets/img/3067287.png" alt="Computer" class="h-80 w-80 mt-20 mr-20"></img>
    </div>
    </div>
    <div class="flex justify-center mt-20 text-5xl">
      <h1>Trabajos</h1>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 mt-20 mr-20 ml-20">
      <div class="text-center">
        <img src="assets/img/1HTML.png" alt="Computer"></img>
        <h1 class="mt-1 text-3xl font-bold">HTML</h1>
      </div>
      <div class="text-center">
        <img src="assets/img/2JAVA.png" alt="Computer"></img>
        <h1 class="mt-1 text-3xl font-bold">JAVA</h1>
      </div>
      <div class="text-center">
        <img src="assets/img/3SQL.png" alt="Computer"></img>
        <h1 class="mt-1 text-3xl font-bold">SQL</h1>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </body>
  );
}

export default App