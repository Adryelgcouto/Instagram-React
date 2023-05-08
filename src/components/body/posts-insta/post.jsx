import Interacoes from './interacoes'
import PostLike from './fotoLike'
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

      <Interacoes tudo={props} />
    </div>
  )
}
