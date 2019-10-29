import React from 'react';

const SongSelector = (props) => {
    const options = props.songs.map((song, index) => {
        return <option value={index} key={index}>{song.title}</option>
    })

    function handleChange(event) {
        props.onSongSelected(event.target.value);
      }

      return (
        <select id="song-selector" onChange={handleChange} defaultValue="default">
          <option disabled value="default">Choose a song...</option>
          { options }
        </select>
      )
}


export default SongSelector;