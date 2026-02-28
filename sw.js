self.addEventListener('install', e=>{
 console.log('SW instalado')
 self.skipWaiting()
})

self.addEventListener('activate', e=>{
 console.log('SW activo')
})

self.addEventListener('fetch', e=>{})

let tiempo = 0
let temporizador

function iniciarTiempo(){
 tiempo = 0
 temporizador = setInterval(()=>{
   tiempo++
   document.getElementById("tiempo").textContent = tiempo
 },1000)
}