import Post from "./post"
export default function Posts() {
  const postArray = [
    {
      imgUsuario:'assets/img/meowed.svg',
      nome:'meowed',
      imgPost:'assets/img/gato-telefone.svg',
      nomePost: 'gato-telefone',
      imgCurtida: 'assets/img/respondeai.svg',
      nomeCurtida: 'respondeai',
      quantidadeCurtida:'101.523'
    },
    {
      imgUsuario:'assets/img/filomoderna.svg',
      nome:'filomoderna',
      imgPost:'assets/img/gato-telefone.svg',
      nomePost: 'gato-telefone',
      imgCurtida: 'assets/img/wawawicomics.svg',
      nomeCurtida: 'wawawicomics',
      quantidadeCurtida:'234.523'
    },
    {
      imgUsuario:'assets/img/meowed.svg',
      nome:'meowed',
      imgPost:'assets/img/dog.svg',
      nomePost: 'gato-telefone',
      imgCurtida: 'assets/img/adorable_animals.svg',
      nomeCurtida: 'adorable_animals',
      quantidadeCurtida:'99.159'
    }
  ]
  return (
    <div class="posts">
      {postArray.map((post) => <Post imgUsuario={post.imgUsuario} nome={post.nome} imgPost={post.imgPost} nomePost={post.nomePost} imgCurtida={post.imgCurtida} nomeCurtida={post.nomeCurtida} quantidadeCurtida={post.quantidadeCurtida} />)}
    </div>
  )
}
