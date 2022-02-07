import { cn } from '@bem-react/classname';
import { FC, useCallback } from 'react';

import { DataProject } from '../type';

import './ProjectApplicationStage.scss'

const cnProjectApplicationStage = cn('ProjectApplicationStage');

const emptyAvatars = [
  {
    icon: '',
    title: '',
    text: '',
  },
];

export const ProjectApplicationStage: FC<DataProject> = ({ id, stage }) => {
  const getStages = useCallback(() => {
    let arrStage = stage === undefined ? emptyAvatars : stage;
    return arrStage;
  }, [stage]);

  return (
    <div className={`${cnProjectApplicationStage()} ${cnProjectApplicationStage(`${id}`)}`}>
      {getStages().map((item, index) => (
        <div className={`${cnProjectApplicationStage('block')} ${cnProjectApplicationStage(`block-${index}`)}`}>
          <img
            className={cnProjectApplicationStage('block-icon')}
            key={index}
            src={item.icon}
            alt="avatar"
          />
          <h5 className={cnProjectApplicationStage('block-title')}>{item.title}</h5>
          <p className={cnProjectApplicationStage('block-text')}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
