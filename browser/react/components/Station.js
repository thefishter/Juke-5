import React from 'react';
import Songs from '../components/Songs';

export default function Station (props) {
  const genreName = props.params.genreName;
  const songs = props.songs;
  const currentSong = props.currentSong;
  const toggleOne = props.toggleOne;
  const isPlaying = props.isPlaying;

  console.log('Props in Station', props);

  return (
    <div>
      <h3>{ genreName } Station</h3>
      <Songs
        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne}
      />
    </div>
  );
}
