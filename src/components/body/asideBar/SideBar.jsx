import Suggestion from './Suggestion'
import Usuario from './usuario'
export default function SideBar() {
  const sugestaoArray = [
    {
      imagem: 'assets/img/bad.vibes.memes.svg',
      nome: 'bad.vibes.memes.svg'
    },
    {
      imagem: 'assets/img/chibirdart.svg',
      nome: 'chibirdart'
    },
    {
      imagem: 'assets/img/razoesparaacreditar.svg',
      nome: 'razoesparaacreditar'
    },
    {
      imagem: 'assets/img/adorable_animals.svg',
      nome: 'adorable_animals'
    },
    {
      imagem: 'assets/img/smallcutecats.svg',
      nome: 'smallcutecats'
    }
  ]

  return (
    <div class="sidebar">
      <Usuario/>
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestaoArray.map(sugestao => (
          <Suggestion imagem={sugestao.imagem} nome={sugestao.nome} />
        ))}
      </div>
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  )
}
