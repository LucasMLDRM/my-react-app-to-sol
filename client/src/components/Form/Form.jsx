import "./Form.module.css"

const Form = () => {
    return (<div>
        <h2>Crea Tu Videojuego</h2>
        <form action="" onSubmit={(e)=>{ e.preventDefault()}}>
            <label>Name:</label>
            <input type="text" placeholder=" videogame name..."/>
            <button>Create Videogame</button>
        </form>
    </div>)
}

export default Form;