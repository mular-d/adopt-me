import { StrictMode, useState } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import SearchParams from './SearchParams.jsx'
import ThemeContext from './ThemeContext'
import Details from './Details.js'

const App = () => {
  const theme = useState('darkblue')
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        {' '}
        <BrowserRouter>
          <header>
            <Link to='/'>Adopt Me!</Link>
          </header>
          <Routes>
            <Route path='/details/:id' element={<Details />} />
            <Route path='/' element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  )
}

render(<App />, document.getElementById('root'))
