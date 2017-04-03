import { connect } from "react-redux";
import React, { Component } from "react";

import Station from '../components/Station'
import {convertSong} from '../utils.js'

class StationContainer extends Component {
  constructor(props) {
    super(props)
  }

  toggle(song, list) {
    store.dispatch(toggleSong(song, list));
  }
}


const filterSongsForStation = function (songsArray, ownProps) {
  const stationSongs = songsArray.filter((song) =>
    song.genre === ownProps.params.genreName)
    .map(convertSong)

  return stationSongs;
};

const mapStateToProps = (state, ownProps) => ({
  songs: filterSongsForStation(state.songs, ownProps), 
  isPlaying: state.player.isPlaying,
  currentSong: state.player.currentSong,
  genreName: ownProps.params.genreName

}
); 



const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Station)