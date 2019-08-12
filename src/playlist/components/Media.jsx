import React from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends React.Component {
  handleClick = (event) => {
    this.props.openModal(this.props.id)
  }
  render() {
    return(
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img 
            src={this.props.cover} 
            alt=""
            width={260}
            height={160}
            className="Media-image"
          />
        </div>
        <h3 className="Media-title">{this.props.title}</h3>
        <p className="Media-author">{this.props.author}</p>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string, 
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;