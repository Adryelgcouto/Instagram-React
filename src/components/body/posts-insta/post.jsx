import Acoes from "./acoes"
export default function Post(props) {
  console.log(props)
  return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img data-test="post-image"   src={props.imgUsuario} alt={props.nome} />
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imgPost} alt={props.nomePost} />
      </div>
      
      <div class="fundo">
      <Acoes/>

        <div class="curtidas">
          <img src={props.imgCurtida} alt={props.nomeCurtida} />
          <div class="texto">
            Curtido por <strong>{props.nomeCurtida}</strong> e{' '}
            <strong data-test="likes-number">outras {props.quantidadeCurtida} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
