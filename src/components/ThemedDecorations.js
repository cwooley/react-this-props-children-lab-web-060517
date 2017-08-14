// Code ThemedDecoration Component Here
import React, { PropTypes } from 'react'

class ThemedDecorations extends React.Component {
  childrenWithExtraProp (){
    const childPlease =  React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
          className: this.props.theme
        });
      });
    console.log(childPlease)
    return childPlease
  }

  render () {

    return(
      <div>
        {this.childrenWithExtraProp()}
      </div>
    )
  }
}

export default ThemedDecorations;
