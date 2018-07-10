import React from 'react';

import Thumbnail from '../Thumbnail';

class Photo extends React.Component{
  state ={
    file: false,
    imagePreviewUrl: ''
  }

  _handleSubmit(e){
    e.preventDefault();
    if(this.state.file){
      this.props.blockCreate(
        'Photo',{
          file: this.state.file,
          dataUri: this.state.imagePreviewUrl,

        },
        {
          sizeX: 200,
          sizeY: 200,
          x:0,
          y:0
        });

      this.props.hideDialog();
    }}

  _handleImageChange(e){
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () =>{
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    if(file){
      reader.readAsDataURL(file);
    }
  }
  _showThumbnail=()=>{
    return(
      <Thumbnail
        type="Photo"
        data={{ dataUri: this.state.imagePreviewUrl}}
        geometry={{
          sizeX: 200,
          sizeY: 200,
          x:0,
          y:0
        }} />);
  };
  render(){
    return(
      <div className="imageSelector">
          <input
            ref="upload"
            className="fileInput"
            type="file"
            accept="image/*"
            onChange={(e)=>{this._handleImageChange(e);}}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}
          >
            Загрузить фото
          </button>
        {this.state.imagePreviewUrl ? this._showThumbnail() : ''}
      </div>);
  }
}

export default Photo;
