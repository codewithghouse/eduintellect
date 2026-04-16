import React from 'react';
import { Composition } from 'remotion';
import { ProductVideo } from './ProductVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="EduIntellectVideo"
      component={ProductVideo}
      durationInFrames={1800}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
