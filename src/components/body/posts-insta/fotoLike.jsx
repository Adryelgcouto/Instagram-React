export default function PostLike(props) {
  console.log(props)

  return (
    <div class="conteudo">
      <img
        onDoubleClick ={props.dupleClick}
        src={props.postTudo.tudo.tudo.imgPost}
        alt={props.postTudo.tudo.tudo.nomePost}
      />
    </div>
  )
}
