import React from 'react';
import {Link} from 'react-router';
import './Photo.css';

function Photo ({ photo }) {
  return (
    <div className="Photo">
    <figure>
    <img src={photo.photoURL || 'https://placekitten.com/480/222'} alt="Meow"/>
    </figure>

    <div className="Photo__Headline">
    <Link to={{
      pathname: '/photo/'+photo.id,
      state: {
        photoURL: photo.photoURL,
        title: photo.title,
        authorURL: photo.authorURL,
        ownername: photo.ownername,
        description: photo.description._content
      }
    }}>
    <h2 className="Photo__Title">{photo.title || 'Unknown'}</h2></Link>
    <span className="Photo__Author">by <a href={photo.authorURL} target="_blank">{photo.ownername}</a></span>
    </div>

    <div className="Photo__Description">
    {photo.description._content}
    </div>

    {!!photo.tags && <PhotoTags tags={photo.tags} />}
    </div>
  );
}

function PhotoTags ({ tags }) {
  return (
    <div className="Photo__Tags">
    {(tags.split(' ') || []).map((tag, i) => <span key={`tag_${i}`} className="Photo__Tag">{tag}</span>)}
    </div>
  );
}

export default Photo;
