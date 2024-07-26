// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationList} = props
  const {name, imgUrl} = destinationList
  return (
    <li>
      <div>
        <img className="image" src={imgUrl} alt={name} />
        <h1>{name}</h1>
      </div>
    </li>
  )
}

export default DestinationItem
