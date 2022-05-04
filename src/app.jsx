import { render } from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import SearchParams from './SearchParams.jsx'
import Details from './Details.js'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>Adopt Me!</Link>
      </header>
      <Routes>
        <Route path='/details/:id' element={<Details />} />
        <Route path='/' element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  )
}

render(<App />, document.getElementById('root'))
