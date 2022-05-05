import { Component } from 'react'
import { useParams } from 'react-router-dom'

import Carousel from './Carousel.js'

class Details extends Component {
  state = { loading: true }

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
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

const WrapedDetails = () => {
  const params = useParams()
  return <Details params={params} />
}

export default WrapedDetails
