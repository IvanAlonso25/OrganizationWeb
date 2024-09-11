import Table from './components/table'
import DropdownMenu from './components/menu'
import './App.css'


function Horario() {

  return (
    <>
      <div>
        {DropdownMenu()}
      </div>
      <div>
        <h1>HORARIO SEMANAL</h1>
        {Table()}
      </div>
    </>
  )
}

export default Horario;
