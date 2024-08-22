// @ts-nocheck
import { ProjectsService } from '../services';
import { Project } from '../entities';

export const ProjectsResolver = {
  async getProjects(parent, args, context, info): Promise<Project[] | []> {
    const projectsService = new ProjectsService;
    return  projectsService.getProjects(parent, args, context, info) ;
  },
  async getProjectByID(parent, args, context, info): Promise<Project | null> {
    const projectsService = new ProjectsService;
    return  projectsService.getProjectByID(parent, args, context, info) ;
  },

}