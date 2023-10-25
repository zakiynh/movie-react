import Home from './views/HomePage'
import DetailPage from './views/DetailPage'
import CheckoutPage from './views/CheckoutPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/:imdbID' element={<DetailPage />} />
          <Route path='/cart' element={<CheckoutPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
