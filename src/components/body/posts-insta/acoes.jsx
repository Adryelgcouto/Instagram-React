import { useState } from 'react'

export default function Acoes() {
  let [like, setLike] = useState('heart-outline')
  let [vermelho, setVermelho] = useState('')
  const HandLike = () => {
    if (like === 'heart-outline') {
      like = 'heart'
      setLike(like)
      vermelho = 'vermelho'
      setVermelho(vermelho)
    } else {
      like = 'heart-outline'
      setLike(like)
      vermelho = ''
      setVermelho(vermelho)
    }
  }
  return (
    <div class="acoes">
      <div>
        <ion-icon
          class={vermelho}
          onClick={HandLike}
          data-test="like-post"
          name={like}
        ></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
      </div>
    </div>
  )
}
