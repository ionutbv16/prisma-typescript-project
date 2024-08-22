
// @ts-nocheck
import { Project } from '../entities';

export class ProjectsService {
  async getProjects(parent, args, context, info): Promise<Project[] | []> {
    const projects = await context.prisma.projects.findMany();
    return projects;
  }
  async getProjectByID(parent, args, context, info): Promise<Project | null> {
    const where = args?.id
      ? { id: args?.id }
      : {};
    const project = await context.prisma.projects.findUnique(
      {where : where}
    );
    return  project;
  }
}