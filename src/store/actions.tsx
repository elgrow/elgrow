import { ProjectsData } from "../components/type";

export const PROJECTS_DATA_ACTION = 'PROJECTS_DATA';

export function getProjectsData(projectsData: ProjectsData) {
  return { type: PROJECTS_DATA_ACTION, projectsData };
}

export type ProjectsDataActionType = ReturnType<typeof getProjectsData>;

export type Action = ProjectsDataActionType;
