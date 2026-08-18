
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { getProduct } from './services/Products.ts'

const root = createRoot(document.getElementById('root')!)

getProduct().then((Products) => {
    root.render(
      <App products={Products}/>
    )
})
