import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams()

  return <div>{id}</div>
}

export default Details
