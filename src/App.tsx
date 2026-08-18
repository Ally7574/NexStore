import { ProductCard } from "./components/ProductCard"
import type {Product} from "./type/Product"

interface AppProps{
  products: Product[]
}

function App(props: AppProps) {



  return (
    <main>
      <h1>NexStore</h1>

      {
        props.products.map((value) => {
          return <ProductCard product={value} />
        })
      }
    </main>
  )
}

export default App