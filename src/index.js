import ReactDom from 'react-dom'
import Cabecalho from './components/navBar/navbar'
import Corpo from './components/corpo/corpo'
function app() {
  return (
    <>
    <Cabecalho/>
    <Corpo/>
    
    
    </>
  )
}

ReactDom.render(app(), document.querySelector(".root"))