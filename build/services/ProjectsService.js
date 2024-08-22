"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
class ProjectsService {
    getProjects(parent, args, context, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield context.prisma.projects.findMany();
            return projects;
        });
    }
    getProjectByID(parent, args, context, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = (args === null || args === void 0 ? void 0 : args.id)
                ? { id: args === null || args === void 0 ? void 0 : args.id }
                : {};
            const project = yield context.prisma.projects.findUnique({ where: where });
            return project;
        });
    }
}
exports.ProjectsService = ProjectsService;
