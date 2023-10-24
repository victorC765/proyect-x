import Link from "next/link"
import "./css/page.css"

export default function pageI(){
  return(
    <selection>
    <header className="cabezal">
      <section className="titulo" id="izquierda">
      <h1>PROYECT X</h1>
      </section>
         <selection id ="derecha" className="buscador">
         <input 
          type="text" 
          placeHolder="buscar"></input>
          <button>B</button>
          </selection>
         <section>
           <nav>
             <ul>
               <li><Link to="./components/pages">top videos<Link/></li>
               <li>inicio</li>
               <li>acerca de </li>
             </ul>
          </nav>
        </section> 
        
    </header>
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
