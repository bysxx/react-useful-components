import { useEffect, useRef } from 'react';

interface Props {
  src: string;
  isMuted: boolean;
}

const Video = ({ src, isMuted }: Props) => {
  const refVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!refVideo.current) {
      return;
    }

    if (isMuted) {
      refVideo.current.defaultMuted = true;
      refVideo.current.muted = true;
    }

    refVideo.current.src = src;
  }, [src, isMuted]);

  return (
    <video
      ref={refVideo}
      autoPlay
      playsInline
    />
  );
};

export default Video