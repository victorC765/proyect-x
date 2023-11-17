"use client"
import "../css/form.css"
export default 
function loginPage(){
    return(
        <form className="form">
            <section>
                <h1 className="titulo">Login</h1>
            </section>
            <section>
                <input type="text"
                placeholder="name"
                />
                
            </section>
        </form>
    )
}