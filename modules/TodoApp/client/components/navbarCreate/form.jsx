import { Component, PropTypes } from 'react';
import {backBtn} from './_backBtn'

export default function() {
  return React.createClass({
    // static propTypes = {}
    componentWillMount() {
    },

    render() {
        return (
          <div data-page="form" className={this.props.class}>
            <div className="left sliding"><a href="" onClick={()=> backBtn(this)} className=" link"> <i className="icon icon-back"/><span>Back</span></a>
            </div>
            <div className="center sliding">Form</div>
          </div>
        );
    }
  })
}
