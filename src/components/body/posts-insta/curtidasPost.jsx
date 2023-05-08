export default function CurtidasPost(props) {
  console.log(props)
  return (
    <div class="curtidas">
      <img src={props.curtidasImg} alt={props.curtidasName} />
      <div class="texto">
        Curtido por <strong>{props.curtidasName}</strong> e {'Jorgin da otica '}
        <strong data-test="likes-number">
          outras {Number(props.curtidasQuan).toLocaleString('pt-BR')} pessoas
        </strong>
      </div>
    </div>
  )
}
