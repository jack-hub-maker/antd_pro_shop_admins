/*
 * @Descripttion:
 * @version: 1.0
 * @Author:
 * @Date: 2021-11-30 14:13:31
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-11-30 17:24:07
 * @FilePath: /xh标准版/archives-web/src/components/myComponents/MyVideoPlayer.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved.
 */

import React from 'react';
import Player from 'griffith';
interface IProps {
  // id
  id: string;
  // 音频来源
  sources: string;
  // sources={{
  //     hd: {
  //         play_url: string,
  //     },
  // }}
  // 是否自动播放
  autoplay?: boolean | undefined;
}
const MyVideoPlayer: React.FC<IProps> = (props) => {
  const { id, sources, autoplay } = props;
  console.log('sources:', sources);
  console.log('autoplay:', autoplay);
  return (
    <Player
      id={id}
      autoplay={autoplay}
      // sources={sources}
      sources={{
        hd: {
          play_url: sources,
        },
      }}
    />
  );
};
export default MyVideoPlayer;
