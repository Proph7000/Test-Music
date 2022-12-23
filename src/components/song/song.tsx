import { FC, useEffect, useRef } from 'react';

import './song.scss';

type Props = {
  title: string,
  mp3: string,
  author: string,
  currentSong: string | null,
  setCurrentSong: React.Dispatch<React.SetStateAction<string | null>>,
  isPlaying: boolean,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
};

export const Song: FC<Props> = ({
  title,
  mp3,
  author,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
}) => {
  const player = useRef<HTMLAudioElement>(null);

  function handlePlayButton() {
    setIsPlaying(!isPlaying);

    if (currentSong !== mp3) {
      setIsPlaying(true);
    }

    setCurrentSong(mp3);
  }

  useEffect(() => {
    if (isPlaying && currentSong === mp3) {
      player.current?.play();
    } else {
      player.current?.pause();
    }
  }, [currentSong, isPlaying]);

  return (
    <figure className="song">
      <div className="song__container">
        <figcaption className="song__title">
          { title }
        </figcaption>

        <figcaption className="song__author">
          { author }
        </figcaption>
      </div>

      <audio
        ref={player}
        className="song__mp3"
        src={mp3}
        autoPlay
      >
        <track kind="captions" />
      </audio>

      <button
        onClick={handlePlayButton}
        className="song__button"
        type="button"
        aria-label="play"
      >
        {(isPlaying && currentSong === mp3) ? 'Pause' : 'Play'}
      </button>
    </figure>
  );
};
