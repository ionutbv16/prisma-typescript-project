// @ts-nocheck
import {PrismaClient} from '@prisma/client';
import { ProjectsService } from '../services';

export async function getProjects(request, response) {

  const prisma = new PrismaClient({
    errorFormat: 'minimal'
  });

  const projectsService = new ProjectsService;
  const projects =  await projectsService.getProjects(null, null, {prisma}, null);
  response.status(200).send({
    projects,
  });

}