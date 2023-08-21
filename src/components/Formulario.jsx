import { useState } from 'react'
import '../App.css'
import Alert from "./Alert"


const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [edad, setEdad] = useState("");
    const [genero, setGenero] = useState("Femenino");

    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");

    const [errorNombre, setErrorNombre] = useState(false);
    const [errorApellido, setErrorApellido] = useState(false);
    const [error, setError] = useState(false);
    const [passwordError, setErrorPassword] = useState(false);
    const [errorEdad, setErrorEdad] = useState(false);
    const [errorLog, setErrorLog] = useState(false);
    const [correoError, setErrorEmail] = useState(false);

    const [message, setMessage] = useState('');



    const validarDatos = (e) => {
        e.preventDefault()

        if (nombre === "" || apellido === "" || email === "" || password === "" || password2 === "" || edad === "" || genero === "") {
            setError(true)
            return;
        } else if (password !== password2) {
            setPasswordError(true);
            return;
        } else if (edad < 18) {
            setErrorEdad(true);
            return;
        } else {
            checkIn();
            setMessage("¡REGISTRO EXITOSO!");
        }


    // const regex = /^[a-zA-Z]+$/;
    // function validarCadena(input) {
    //     return input !== '' && regex.test(input);
    // }

    // console.log(`Valida datos`)
    //if (!validarCadena(nombre)) {
    //   console.log(`Ta malo el nombre`)
    //   setErrorNombre(true)
    // return;
    //}

    //if (!validarCadena(apellido)) {
    //  console.log(`Ta malo el apellido`)
    //setErrorApellido(true)
    //return;
    //}


    setErrorNombre(false)
    setErrorApellido(false)
    setErrorEdad(false)
    setError(false);
    setErrorLog(false);
    setErrorEmail(false);
    setNombre("");
    setApellido("");
    setEmail("");
    setPassword("");
    setPassword2("");
    setEdad("");
    setGenero("");
}

const validarEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
};

const validarEdad = (edad) => {
    const agePattern = /^(1[89]|[2-9]\d|\d{3,})$/;
    return agePattern.test(edad);
};

const validarPassword = (password, password2) => {
    return password === password2
};


const validarLog = (e) => {
    e.preventDefault()

    if (emailLog === "" || passwordLog === "") {
        setErrorLog(true);
        return;
    }

    setErrorLog(false);
    setEmailLog("");
    setPasswordLog("");

}

const checkIn = () => {
    setMessage("¡REGISTRO EXITOSO!");
}



return (
    <>
        <div>

        {message && <Alert message={message} />}
            <br />

            <form className="formulario" onSubmit={validarDatos}>
                {errorNombre ? <p className="error">Nombre no válido</p> : null}
                {errorApellido ? <p className="error">Apellido no válido</p> : null}
                {error ? <p className="error">¡Completa todos los campos!</p> : null}
                {passwordError ? <p className="error">Contraseña incorrecta</p> : null}
                {errorEdad ? <p className="error">Debes tener +18 años</p> : null}
                {correoError ? <p className="error">Debes ingresar un email válido</p> : null}



                <div className="form-group">
                    <label for='nombre'>Nombre: </label>
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        onChange={(e) => setNombre(e.target.value)}
                        onKeyPress={(e) => {
                            if (/\d/.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                        value={nombre}
                    />
                </div>

                <div className="form-group">
                    <label for='apellido'>Apellido: </label>
                    <input
                        type="text"
                        name="apellido"
                        className="form-control"
                        onChange={(e) => setApellido(e.target.value)}
                        onKeyPress={(e) => {
                            if (/\d/.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                        value={apellido}
                    />
                </div>

                <div className="form-group">
                    <label for='email'>E-mail: </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label for='edad'>Edad: </label>
                    <input
                        type="number"
                        name="edad"
                        className="form-control"
                        onChange={(e) => setEdad(e.target.value)}
                        value={edad}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label>Selecciona tu género</label>
                    <br />
                    <select
                        onChange={(e) => setGenero(e.target.value)}
                        value={genero} defaultValue={""}>
                        <option value={"femenino"}>Femenino</option>
                        <option value={"masculino"}>Masculino</option>
                        <option value={"no binario"}>No binario</option>
                        <option value={"otro"}>Prefiero no decir</option>
                    </select>
                </div>
                <br />
                <div className="form-group">
                    <label for='password'>Contraseña: </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div className="form-group">
                    <label for='password2'>Confirma tu contraseña: </label>
                    <input
                        type="password"
                        name="password2"
                        className="form-control"
                        onChange={(e) => setPassword2(e.target.value)}
                        value={password2}
                    />
                </div>

                <button className="btn btn-dark mt-3 deleteme" type="submit" onClick={() => {checkIn()} }>
                    REGISTRARSE
                </button>

                <div className="form-item">
                        <button className="btn btn-dark mt-3" type="submit">INICIAR SESIÓN</button>
                </div>
            </form>

        </div>
    </>
)
}


export default Formulario;