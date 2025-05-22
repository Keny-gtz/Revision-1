const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Se cambio  name  a '.name' por que se estan utilizando clases
const $b = document.querySelector('.blog');//Se cambio  name  a '.name' por que se estan utilizando clases
const $l = document.querySelector('.location');
async function displayUser(username) {  // Se tiene que agregar async porque se utiliza  await dentro de esta función
  $n.textContent = 'cargando...';
  try { // Se agrega el try para  obtiener  la respuesta de la API usando fetch
  const response = await fetch(`${usersEndpoint}/${username}`);
   const data = await response.json() //Agregamos lo siguiente para poder convertir  en JSON y poder acceder a los datos
  console.log(data); 

$n.textContent = `${data.name}`; //se colocaron las backticks adecuadamente 
  $b.textContent = `${data.blog}`;//se colocaron las backticks adecuadamente 
  $l.textContent = `${data.location}`;//se colocaron las backticks adecuadamente 
}catch (err) { //se agrego el catch.
  handleError(err); //Se agregó manejo de errores dentro de la función asincrónica
}
}
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //Se agrego a 'n.textContent' el simbolo de $, ya que  es la variable correcta.
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);