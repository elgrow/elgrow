import { FC } from 'react';

import { DataProject } from '../type';

import './TitleH3.scss';

export const TitleH3: FC<DataProject> = ({ title }) => {
  let newTitle;
  !title ? (newTitle = '') : (newTitle = title);

  return <div dangerouslySetInnerHTML={{ __html: `<h3 class="TitleH3">${newTitle}</h3>` }}></div>;
  // innerHtml норм?
};
