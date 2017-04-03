import { connect } from "react-redux";
import React, { Component } from "react";

import Stations from '../components/Stations'

class StationsContainer extends Component {
  constructor(props) {
    super(props)
  }
}

const convertSongsToStations = function (songsArray) {
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
};

const mapStateToProps = (state) => ({stations: convertSongsToStations(state.songs) }); // DONT FORGET ({})

const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Stations)
