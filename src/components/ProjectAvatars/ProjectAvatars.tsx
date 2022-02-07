import { cn } from '@bem-react/classname';
import { FC, useCallback } from 'react';

import { DataProject } from '../type';

import './ProjectAvatars.scss';

const cnProjectAvatars = cn('ProjectAvatars');

const emptyAvatars = {
  avatar1: '',
  avatar2: '',
  avatar3: '',
  avatar4: '',
};

export const ProjectAvatars: FC<DataProject> = ({ id, avatars }) => {
  const getAvatars = useCallback(() => {
    const arrAvatar: any[] = [];

    for (let key in avatars) {
      let x = (avatars === undefined ? emptyAvatars : avatars);
      //@ts-ignore
      arrAvatar.push(x[key]);
    }
    return arrAvatar;
  }, [avatars]);

  
  return (
    <div className={`${cnProjectAvatars()} ${cnProjectAvatars(`${id}`)}`}>
      {getAvatars().map((avatar, index) => (
        <img className={`${cnProjectAvatars('avatar')} ${cnProjectAvatars(`avatar-${index}`)}`} key={index} src={avatar} alt="avatar" />
      ))}
    </div>
  );
};
