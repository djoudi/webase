import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import {backBtn} from './_backBtn'

export default class navbarAbout extends Component {
  static propTypes = {}
  render() {
      return (
        // <script type="text/template" id="about">
        // <div data-page="about" className="navbar-inner {this.props.current}">
        // <div data-page='about' className={this.props.class}>
        <div data-page={this.props.dataPage} className={this.props.class}>
          <div className="left sliding"><a href={this.props.back} onClick={()=> backBtn(this)} className=" link"> <i className="icon icon-back"/><span>Back</span></a>
          </div>
          <div className="center sliding">About Us</div>
        </div>
        // </script>
      );
  }
}
