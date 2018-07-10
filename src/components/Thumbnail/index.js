import React from 'react';
import PropTypes from 'prop-types';

import PhotoThumbnail from './Photo';
import VideoThumbnail from './Video';

class Thumbnail extends React.Component {
  _getThumbnail=()=>{
    switch(this.props.type){
    case "Photo":
      return(<PhotoThumbnail data={this.props.data} geometry={this.props.geometry}/>);
    case "Video":
      return(<VideoThumbnail data={this.props.data} geometry={this.props.geometry}/>);
    default:
      break;
    }
  };

  render(){
    return(<div className="thumbnail" draggable="false" >{this._getThumbnail()}</div>);
  }
};

Thumbnail.propTypes = {
  type: PropTypes.oneOf(["Photo", "Video"]).isRequired,
  data: PropTypes.shape({
    dataUri: PropTypes.string.isRequired
  }),
  geometry: PropTypes.shape({
    sizeX: PropTypes.number.isRequired,
    sizeY: PropTypes.number.isRequired
  }).isRequired
};


export default Thumbnail;
