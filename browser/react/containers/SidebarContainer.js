import { connect } from "react-redux";
import React, {Component} from 'react';

import Sidebar from '../components/Sidebar';

class SidebarContainer extends Component {

  constructor(props) {
    super(props);
  }
}

const mapStateToProps = (state, ownProps) => ({
  playlists: state.playlists.list
}); 

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
