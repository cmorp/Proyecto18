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
    const [genero, setGenero] = useState("");

    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");

    const [error, setError] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorEdad, setErrorEdad] = useState(false);
    const [errorLog, setErrorLog] = useState(false);
    const [correoError, setErrorEmail] = useState(false);



    const validarDatos = (e) => {
        console.log(e)
        e.preventDefault()

        if (nombre === "" || apellido === "" || email === "" || password === "" || password2 === "" || edad === "" || genero === "") {
            setError(true)
            return;
        } else if (password != password2) {
            setPasswordError(true);
            setPassword("");
            setPassword2("");
            return;
        } else if (edad < 18) {
            setErrorEdad(true);
            return;
        }

        setError(false);
        setPasswordError(false);
        setErrorEdad(false);
        setNombre("");
        setApellido("");
        setEmail("");
        setPassword("");
        setPassword2("");
        setEdad("");
    }


    const validarEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }


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


    const showSuccessAlert = () => {
        setAlertMessage("¡REGISTRO EXITOSO!");
    }



    return (
        <>
            <div>
                <form className="formulario" onSubmit={validarDatos}>
                    {error ? <p className="error">¡Completa todos los campos!</p> : null}
                    {passwordError ? <p className="error">Contraseña incorrecta</p> : null}
                    {errorEdad ? <p className="error">Debes tener +18 años</p> : null}
                    {correoError ? <p className="error">Debes ingresar un email válido</p> : null}

                    <div className="form-item">
                        <label for='nombre'>Nombre: </label>
                        <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                        />
                    </div>

                    <div className="form-item">
                        <label for='apellido'>Apellido: </label>
                        <input
                            type="text"
                            name="apellido"
                            className="form-control"
                            onChange={(e) => setApellido(e.target.value)}
                            value={apellido}
                        />
                    </div>

                    <div className="form-item">
                        <label for='email'>E-mail: </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className="form-item">
                        <label for='edad'>Edad: </label>
                        <input
                            type="text"
                            name="edad"
                            className="form-control"
                            onChange={(e) => setEdad(e.target.value)}
                            value={edad}
                        />
                    </div>

                    <div className="form-item">
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

                    <div className="form-item">
                        <label for='password'>Contraseña: </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <div className="form-item">
                        <label for='password2'>Confirma tu contraseña: </label>
                        <input
                            type="password"
                            name="password2"
                            className="form-control"
                            onChange={(e) => setPassword2(e.target.value)}
                            value={password2}
                        />
                    </div>

                    <button className="btn btn-dark mt-3" type="submit" onSubmit={showSuccessAlert}>
                        REGISTRARSE
                    </button>

                    <div className="form-item">
                        <a href="#">
                            <button className="btn btn-dark mt-3">INICIAR SESIÓN</button>
                        </a>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Formulario;