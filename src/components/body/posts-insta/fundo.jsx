import { useState } from 'react'
import Acoes from './acoes'
export default function Fundo(props) {
  let [like, setLike] = useState('heart-outline')
  let [vermelho, setVermelho] = useState('')
  let [curtidas, setCurtidas] = useState(props.tudo.quantidadeCurtida)
  const HandLike = () => {
    if (like === 'heart-outline') {
      like = 'heart'
      setLike(like)
      vermelho = 'vermelho'
      setVermelho(vermelho)
      setCurtidas(Number(curtidas) + 1)
    } else {
      like = 'heart-outline'
      setLike(like)
      vermelho = ''
      setVermelho(vermelho)
      setCurtidas(Number(curtidas) - 1)
    }
  }
  return (
    <div class="fundo">
      <Acoes click={HandLike} classColor={vermelho} like={like} />
      <div class="curtidas">
        <img src={props.tudo.imgCurtida} alt={props.tudo.nomeCurtida} />
        <div class="texto">
          Curtido por <strong>{props.tudo.nomeCurtida}</strong> e{' '}
          <strong data-test="likes-number">outras {Number(curtidas).toLocaleString()} pessoas</strong>
        </div>
      </div>
    </div>
  )
}
