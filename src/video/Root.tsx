import React from 'react';
import { Composition } from 'remotion';
import { ProductVideo, TOTAL_FRAMES, FPS } from './ProductVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="EdullentVideo"
        component={ProductVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
