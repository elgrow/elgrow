export type TitleH3Props = {
  titleH3: string;
};

export type ProjectsData = {
  _id: number;
  img: string;
  text: string;
  development: string;
  task: string;
  url: string;
};

export type ProjectsProps = {
  data: ProjectsData[];
};

export type Avatars = {
  avatar1: string;
  avatar2: string;
  avatar3: string;
  avatar4: string;
};

export type Stage = {
  icon?: string;
  title?: string;
  text?: string;
};

export type DataProject = {
  prefix?: string;
  id?: number;
  img?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  img6?: string;
  heading?: string;
  imgMedium?: string;
  imgMedium2?: string;
  imgMedium3?: string;
  imgMedium4?: string;
  imgMedium5?: string;
  imgMedium6?: string;
  imgSmall?: string;
  title?: string;
  title2?: string;
  titlePart?: string;
  aboutProject?: string;
  textBig?: string;
  textHard?: string;
  textHard2?: string;
  textHard3?: string;
  textMedium?: string;
  textMedium2?: string;
  textMedium3?: string;
  textMedium4?: string;
  textMedium5?: string;
  textMedium6?: string;
  textMedium7?: string;
  textSmall?: string;
  textSmall2?: string;
  textSmall3?: string;
  textSmall4?: string;
  ul?: string;
  li1?: string;
  li2?: string;
  li3?: string;
  li4?: string;
  text?: string;
  avatars?: Avatars;
  icon?: string;
  icon2?: string;
  stage?: Stage[];
  url?: string;
};

export type DataProjectProps = {
  data: DataProject[];
};
