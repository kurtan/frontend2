import React, { Component } from 'react';
class Figure extends Component{


    render() {
        return (
            <div>
                <figure>
                    <img src={this.props.src} alt="" width='50%'  />
                    <figcaption>{this.props.caption}</figcaption>
                </figure>
            </div>
        )
    }
}
export default Figure