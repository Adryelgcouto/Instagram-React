export default function Post(props) {
  console.log(props)
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgUsuario} alt={props.nome} />
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
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgCurtida} alt={props.nomeCurtida} />
          <div class="texto">
            Curtido por <strong>{props.nomeCurtida}</strong> e{' '}
            <strong>outras {props.quantidadeCurtida} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
