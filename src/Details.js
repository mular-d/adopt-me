import { Component } from 'react'
import { useParams } from 'react-router-dom'

import Carousel from './Carousel.js'
import ThemeContext from './ThemeContext'
import ErrorBoundary from './ErrorBoundary'

class Details extends Component {
  state = { loading: true, redirect: false }

  async componentDidMount() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    )
    const json = await res.json()

    this.setState({ loading: false, ...json.pets[0] })
  }

  render() {
    if (this.state.loading) {
      return <h2>loading</h2>
    }

    const { animal, breed, city, state, description, name, images } = this.state

    return (
      <div className='details'>
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city} - {state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

const WrapedDetails = () => {
  const params = useParams()
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  )
}

export default WrapedDetails
