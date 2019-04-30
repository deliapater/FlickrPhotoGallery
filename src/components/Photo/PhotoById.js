import React, { Component } from 'react';


class PhotoById extends Component {

  state = {
    photo : {
      photoURL: null,
      title: null,
      authorURL: null,
      ownername: null,
      description: null
    }
  }

  componentDidMount () {
    this.setState({ photo: this.props.location.state });
  }

  render () {
    return (
      <div className="Photo">
        <figure>
          <img src={this.state.photo.photoURL} className="expand" alt="picture"  />
        </figure>

        <div className="Photo__Headline">
          <a href={this.state.photo.photoURL} target="_blank">
            <h2 className="Photo__Title">{this.state.photo.title || 'Unknown'}</h2>
          </a>
          <span className="Photo__Author">by <a href={this.state.photo.authorURL}
          target="_blank">{this.state.photo.ownername}</a></span>
        </div>

        <div className="Photo__Description">
          {this.state.photo.description}
        </div>


      </div>
    );
  }
  }

export default PhotoById;
