"use client"
import { useState } from "react"
import "../css/form.css"
import Image from "next/image";
export default 

function loginPage(){
    
        const [userName, setUserName] = useState("");
        const [password, setPassword] = useState(" ");
        const [error, setError] = useState(false);

        
 const handleSubmit = async (event) => {
    event.preventDefault();
    const handleSubmit = async (event) => {
        event.preventDefault();
       
        const response = await fetch('/api/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ username, password })
        });
       
        if (response.ok) {
            const isAuthenticated = true; // Deberías reemplazar esto con tu lógica de autenticación

            if (isAuthenticated) {
            
            localStorage.setItem('isLoggedIn', 'true');}
        } else {
            alert("error cabron :UUUU")
        }
       };
          


  };
    return(
        <section>
        <form className="form" onSubmit={handleSubmit}>
            <section>
                <Image src="/icon/physics.png"  className="react" alt="atom" width={50} height={50}/>
                <h1 className="tituLogin">Login</h1>
            </section>
            <section>
                <input type="text"
                placeholder="User Name"
                className="inputPer"
                value={userName}
                onChange={(event)=>setUserName(event.target.value)}
                />               
            </section>
            <section>
                <input type="password" 
                className="inputPer"
                placeholder="Password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                />
            </section>
            <section>
            <button className="boton" type="submit">
               Init
            </button>
            <button className="boton">
               Register
            </button>
            </section>
        </form>
        <footer>
            <a href="https://github.com/victorC765/proyect-x.git">
             <Image src="/icon/github.png"  className="github" alt="reposito" width={60} height={60}></Image>
            </a>
        </footer>
        </section>
    )
}