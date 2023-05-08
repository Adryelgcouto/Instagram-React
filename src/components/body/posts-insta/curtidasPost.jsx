export default function CurtidasPost(props) {
  console.log(props)
  return (
    <div class="curtidas">
      <img src={props.curtidasImg} alt={props.curtidasName} />
      <div class="texto">
        Curtido por <strong>{props.curtidasName}</strong> e {'Jorgin da otica '}
        <strong >
          outras <span data-test="likes-number">{ Number(props.curtidasQuan).toLocaleString('pt-BR')}</span>  pessoas
        </strong>
      </div>
    </div>
  )
}
