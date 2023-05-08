import Fundo from './fundo'
export default function Post(props) {
  return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img data-test="post-image" src={props.imgUsuario} alt={props.nome} />
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imgPost} alt={props.nomePost} />
      </div>
      <Fundo tudo={props} />
    </div>
  )
}
