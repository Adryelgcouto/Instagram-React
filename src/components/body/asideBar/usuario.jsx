import React, { useState } from 'react'

export default function Usuario() {
  let [nomeUsuario, setnomUsuario] = useState('SeuNome')
  let [fotoPerfil, setFotoPerfil] = useState('assets/img/catanacomics.svg')
  const HandleName = () => {
    nomeUsuario = prompt('Escolha seu nome')
    if (nomeUsuario !== '') {
      setnomUsuario(nomeUsuario)
    }else{
      alert('coloque um nome valido')
    }
  
  }
  const HandleImage = () =>{
    fotoPerfil = prompt('Coloque sua foto aqui, em forma de Url')
    if(fotoPerfil !== ''){
      setFotoPerfil(fotoPerfil)
    }else{
      alert('Coloque um link valido')
    }
  }

  return (
    <div class="usuario">
      <img  data-test="profile-image"     onClick={HandleImage} src={fotoPerfil} alt="imagem de perfil" />
      <div class="texto">
        <span>
          <strong data-test="name">{nomeUsuario}</strong>
          <ion-icon data-test="edit-name" onClick={HandleName} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
}
