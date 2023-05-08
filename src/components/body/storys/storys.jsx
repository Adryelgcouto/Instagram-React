import Story from './story'

export default function Storys() {
  const post = [
    {
      img: 'assets/img/9gag.svg',
      nome: '9gag'
    },
    {
      img: 'assets/img/meowed.svg',
      nome: 'meowed'
    },
    {
      img: 'assets/img/barked.svg',
      nome: 'barked'
    },
    {
      img: 'assets/img/nathanwpylestrangeplanet.svg',
      nome: 'nathanwpylestrangeplanet'
    },
    {
      img: 'assets/img/wawawicomics.svg',
      nome: 'wawawicomics'
    },
    {
      img: 'assets/img/respondeai.svg',
      nome: 'respondeai'
    },
    {
      img: 'assets/img/filomoderna.svg',
      nome: 'filomoderna'
    },
    {
      img: 'assets/img/memeriagourmet.svg',
      nome: 'memeriagourmet'
    }
  ]
  return (
    <div class="stories">
      {post.map(info => (
        <Story img={info.img} nome={info.nome} />
      ))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}
