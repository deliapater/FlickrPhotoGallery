import React from 'react';
import {Link} from 'react-router-dom';


function Detail ({ photo }) {
  render() {
  return (
    <div className="Photo">
      <figure>
        <img src={photo.photoURL />
      </figure>

      <div className="Photo__Headline">
        <a href={photo.photoURL} target="_blank">
          <h2 className="Photo__Title">{photo.title || 'Unknown'}</h2>
        </a>
        <span className="Photo__Author">by <a href={photo.authorURL} target="_blank">{photo.ownername}</a></span>
      </div>

      <div className="Photo__Description">
        {photo.description._content}
      </div>
    </div>
  );
}
}



export default Details;
