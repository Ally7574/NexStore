
import { Button } from './button'

function App() {

  const textoBotoes = ['botão 1', 'botão 2']

  return (
    <div>
    <h1>hello world</h1>

    {textoBotoes.map((texto, index) => (
      <Button key={index} text={texto} />
    ))}
    </div>
  )
}

export default App