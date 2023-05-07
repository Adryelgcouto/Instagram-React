import Story from "./story"

export default function Storys() {
  return (
    <div class="stories">
      <Story img="assets/img/9gag.svg" nome="9gag" />
      <Story img="assets/img/meowed.svg" nome="meowed"/>
      <Story img="assets/img/barked.svg" nome="barked"/>
      <Story img="assets/img/nathanwpylestrangeplanet.svg" nome="nathanwpylestrangeplanet"/>
      <Story img="assets/img/wawawicomics.svg" nome="wawawicomics"/>
      <Story img="assets/img/respondeai.svg" nome="respondeai"/>
      <Story img="assets/img/filomoderna.svg" nome="filomoderna"/>
      <Story img="assets/img/memeriagourmet.svg" nome="memeriagourmet"/>
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}

