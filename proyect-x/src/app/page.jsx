"use client"
import Link from "next/link"
import "./css/page.css"
import Image from 'next/image';

export default function pageI(){
  function probarBusqueda(){
    alert("busqeuda efectiva")
  }
  return(
    <selection>
    <header className="cabezal">
      <section className="titulo" id="izquierda">
      <h1>PROYECT X</h1>
      </section>
         <selection id ="derecha" className="buscador">
         <input className="inputBus"
          type="text" 
          placeHolder="Buscar"></input>
          <button className="boton" onClick={probarBusqueda}><Image src="/icon/lupa-de-busqueda.png" alt="busqueda" width={19} height={20}></Image></button>
          </selection>
         <section>
           <nav>
             <ul>
               <li>top videos</li>
               <li>inicio</li>
               <li>acerca de </li>
             </ul>
          </nav>
        </section> 
        
    </header>
    <form>
      <input type="date" name="fecha" className="dateStyle" ></input>
    </form>
    <section  className="video">
    <iframe width="300"
     height="200" 
     src="https://www.youtube.com/embed/hTWKbfoikeg?si=6RhlYOts0nzfO3JH" 
     title="YouTube video player"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen></iframe>

    </section>
    <section  className="video">
    <iframe width="300"
     height="200" 
     src="https://www.youtube.com/embed/tMr1tFT-K-s?si=Q97W729OaM15IByV" 
     title="YouTube video player"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen></iframe>
    
    </section>
    
    <section  className="video">
    <iframe width="300"
     height="200" 
     src="https://www.youtube.com/embed/bAcI7gLxLrM?si=T5pgnn6kUcRn-Yya" 
     title="YouTube video player"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen></iframe>
    
    </section>


    </selection>
  )
}
