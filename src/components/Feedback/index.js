// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isEmojiIsClicked: true,
  }

  setIsFeedbackSelected = () => {
    this.setState({isEmojiIsClicked: false})
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <>
        <h1 className="heading">
          How satisfied are you with our customer support Performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachEmoji => (
            <li
              className="emoji"
              key={eachEmoji.id}
              onClick={this.setIsFeedbackSelected}
            >
              <img
                src={eachEmoji.imageUrl}
                className="image"
                alt={eachEmoji.name}
              />
              <p className="emoji-title">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }

  renderSuccessfulContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <>
        <img src={loveEmojiUrl} alt="love emoji" className="love" />
        <h1 className="heading">Thank You!</h1>
        <p className="emoji-title">
          We will use your feedback to improve our customer support performance
        </p>
      </>
    )
  }

  render() {
    const {isEmojiIsClicked} = this.state

    return (
      <div className="container">
        <div className="emoji-containers">
          {isEmojiIsClicked
            ? this.renderEmojiContainer()
            : this.renderSuccessfulContainer()}
        </div>
      </div>
    )
  }
}
export default Feedback
