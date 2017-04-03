import React from 'react';
import Songs from '../components/Songs';

export default function Station (props) {

  const songs = [{
      id: 1,
      name: "The Stars Are Out",
      genre: "Instrumental",
      artists: [{name: "artist1"}]
    },
    {
      id: 2,
      name: "Careless Whisper",
      genre: "Saxophone Solo",
      artists: [{name: "artist1"}]
    },
    {
      id: 3,
      name: "Shooting Star",
      genre: "Instrumental",
      artists: [{name: "artist1"}]
    }] 
  const currentSong = {
      id: 3,
      name: "Shooting Star",
      genre: "Instrumental",
      artists: [{name: "artist1"}]
    } 

  const isPlaying = false;
  const toggle = function(){};
  console.log('Props in Station', props);

  return (
    <div>
    <h4>{`${props.params.genreName} Station`}</h4>
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Artists</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {
          songs && songs.map(song => (
            <tr key={song.id}>
              <td>
                <button className="btn btn-default btn-xs" onClick={() => toggle(song, songs)}>
                  <span className={song.id === currentSong.id && isPlaying ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"}></span>
                </button>
              </td>
              <td>{ song.name }</td>
              <td>
                <span>{ song.artists ? song.artists.map(artist => artist.name).join(', ') : null }</span>
              </td>
              <td>{ song.genre }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  );
}
