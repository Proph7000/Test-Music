import './App.scss';
import { useState } from 'react';
import { Song } from './components/song';
import songs from './api/songs.json';

export const App = () => {
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <ul className="list-songs">
      {songs.map(song => (
        <li key={song.mp3}>
          <Song
            title={song.title}
            mp3={song.mp3}
            author={song.author}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </li>
      ))}
    </ul>
  );
};
