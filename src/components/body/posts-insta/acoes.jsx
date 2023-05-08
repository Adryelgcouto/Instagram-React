

export default function Acoes(props) {
  return (
    <div class="acoes">
      <div>
        <ion-icon
          class={props.classColor}
          onClick={props.click}
          data-test="like-post"
          name={props.like}
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
