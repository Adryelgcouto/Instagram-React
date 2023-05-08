export default function CurtidasPost(props) {
  console.log(props)
  return (
    <div class="curtidas">
      <img src={props.curtidasImg} alt={props.curtidasName} />
      <div class="texto">
        Curtido por <strong>{props.curtidasName}</strong> e {}
        <strong data-test="likes-number">
          outras {Number(props.curtidasQuan).toLocaleString()} pessoas
        </strong>
      </div>
    </div>
  )
}
