import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name="Matheus" />
      <SayMyName name="João" />
      <SayMyName name="Francisco" />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  )
}

export default App