import { useState } from 'react'
import Acoes from './acoes'
import CurtidasPost from './curtidasPost'
import PostLike from './fotoLike'
export default function Interacoes(props) {
  let [like, setLike] = useState('heart-outline')
  let [vermelho, setVermelho] = useState('')
  let [curtidas, setCurtidas] = useState(props.tudo.quantidadeCurtida)
  let [bookMark, setBookMark] = useState('bookmark-outline')
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
  const HandBook = () => {
    if (bookMark === 'bookmark-outline') {
      bookMark = 'bookmark'
      setBookMark(bookMark)
    } else {
      bookMark = 'bookmark-outline'
      setBookMark(bookMark)
    }
  }
  const HandDupleCLickImg = () => {
    if (like === 'heart-outline') {
      like = 'heart'
      setLike(like)
      vermelho = 'vermelho'
      setVermelho(vermelho)
      setCurtidas(Number(curtidas) + 1)
    }
  }
  return (
    <>
      <div class="fundo">
        <Acoes
          tudo={props}
          dupleClick={HandDupleCLickImg}
          click={HandLike}
          classColor={vermelho}
          like={like}
          bookMarkOn={HandBook}
          bookMarkConst={bookMark}
        />
        <CurtidasPost
          curtidasImg={props.tudo.imgCurtida}
          curtidasQuan={curtidas}
          curtidasName={props.tudo.nomeCurtida}
        />
      </div>
    </>
  )
}
