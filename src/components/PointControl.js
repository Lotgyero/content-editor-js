/*
     N
  NW   NE
W          E
  SW   SE
     S
*/
import React from 'react';

const styleNW ={
  left: 0,
  top: 0
};

const styleNE ={
  right: 0,
  top: 0
};

const styleSW = {
  left: 0,
  bottom: 0
};

const styleSE ={
  right: 0,
  bottom: 0
};

const styleCenter ={
  right: '49%',
  left: '49%',
  top: '49%',
  bottom: '49%'
};

class Point extends React.Component{
  _getStyle=()=>{
    switch(this.props.orientation){
    case"NW":
      return styleNW;
    case"NE":
      return styleNE;
    case"SW":
      return styleSW;
    case"SE":
      return styleSE;
    default:
      return styleCenter;
    }
  }
  _handleClick=()=>{
    console.log('point', this.props);
  }
  _handleOnDragStart=(e)=>{
    const {clientX, clientY } = e;
    console.log('onDragStart', clientX, clientY );
  }
  _handleOnDragEnd=(e)=>{
    const {clientX, clientY } = e;
    console.log('onDragStop', clientX, clientY);
    let sizeX;
    let sizeY;
    switch(this.props.orientation){
    case"NW":
      sizeX =  this.props.geometry.sizeX - clientX + this.props.geometry.x;
      sizeY = this.props.geometry.sizeX - clientY + this.props.geometry.y ;
      console.log('rsize NW', sizeX, sizeY );
      this.props.blockResize( this.props.id, sizeX, sizeY);
      break;
    case"NE":
      sizeX = clientX - this.props.geometry.x;
      sizeY = this.props.geometry.y - clientY + this.props.geometry.sizeY ;
      console.log('rsize NE', sizeX, sizeY );
      this.props.blockResize( this.props.id, sizeX, sizeY);
      break;
    case"SW":
      sizeX = this.props.geometry.x - clientX + this.props.geometry.sizeX ;
      sizeY = clientY - this.props.geometry.y;
      console.log('rsize SW', sizeX, sizeY );
      this.props.blockResize( this.props.id, sizeX, sizeY);
      break;
    case"SE":
      sizeX = clientX - this.props.geometry.x;
      sizeY = clientY - this.props.geometry.y;
      console.log('rsize SE', sizeX, sizeY );
      this.props.blockResize( this.props.id, sizeX, sizeY);
      break;
    default:
      break;
    }
  }
  render(){
    console.log('control points',this.props);
    return(
        <div
      style={this._getStyle()}
      draggable="true"
      className="control-point"
      onClick={this._handleClick}
      onDragStart={this._handleOnDragStart}
      onDragEnd={this._handleOnDragEnd}
        >
        </div>
    );
  }
}


// _controls=()=>{
  //   switch(this.props.type){
  //   case "Photo":
  //     return(<PointControl />);
  //   case "Video":
  //     return(<PointControl />);
  //   default:
  //     return(<div />);
  //   };
  // }

class PointControl extends React.Component{


  render(){
    console.log('point control', this.props);
    return(
        <div>

        <Point
      orientation="NW"
      id={this.props.id}
      type={this.props.type}
      blockResize={this.props.blockResize}
      geometry={this.props.geometry} />

        <Point
      orientation="NE"
      id={this.props.id}
      type={this.props.type}
      blockResize={this.props.blockResize}
      geometry={this.props.geometry} />

        <Point
      orientation="SW"
      id={this.props.id}
      type={this.props.type}
      blockResize={this.props.blockResize}
      geometry={this.props.geometry} />

        <Point
      orientation="SE"
      id={this.props.id}
      type={this.props.type}
      blockResize={this.props.blockResize}
      geometry={this.props.geometry} />

        </div>);
  }
};

export default PointControl;
