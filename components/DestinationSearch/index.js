// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    searchInput.toLowerCase()
    const {destinationList} = this.DestinationItem
    console.log(searchInput)

    const searchResult = destinationList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )

    return (
      <div className="bgContainer">
        <h1 className="title">Destination List</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeInput}
        />
        <ul className="list-container">
          {searchResult.map(() => (
            <DestinationItem />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
