import React from 'react'
import { render } from 'react-dom'

import Pet from './Pet'

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havenese',
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      breed: 'Cockatial',
      animal: 'Bird',
    }),
    React.createElement(Pet, {
      name: 'Doink',
      breed: 'Cat',
      animal: 'Mix',
    }),
  ])
}
render(React.createElement(App), document.getElementById('root'))
