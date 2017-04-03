import { connect } from "react-redux";
import React, {Component} from 'react';

import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

class PlaylistContainer extends Component {

  constructor(props) {
    super(props);
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedPlaylist: state.playlists.selected, 
  isPlaying: state.player.isPlaying,
  currentSong: state.player.currentSong
}); 


const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleOne: function (song, list) {
    dispatch(toggleSong(song, list));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
