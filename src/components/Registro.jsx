import React from 'react'
import Alert from './Alert'
import SocialButton from './SocialButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Formulario';
import { BsGithub, BsYoutube, BsFacebook } from "react-icons/bs";


export default function Registro() {
  return (
    <>
      <h1>Crea una cuenta </h1>
      <br />

      <SocialButton nameicon={<BsGithub/>}/>
      <SocialButton nameicon={<BsFacebook/>}/>
      <SocialButton nameicon={<BsYoutube/>}/>
   
      <br />
      <Formulario />

    </>
  )
}

