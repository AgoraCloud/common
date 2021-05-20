"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionDto = exports.RolesAndPermissionsDto = exports.InWorkspaceActions = exports.WorkspaceActionsDto = exports.ActionDto = exports.RoleDto = void 0;
const class_transformer_1 = require("class-transformer");
const users_1 = require("../users");
var RoleDto;
(function (RoleDto) {
    RoleDto["User"] = "user";
    RoleDto["SuperAdmin"] = "super_admin";
    RoleDto["WorkspaceAdmin"] = "workspace_admin";
})(RoleDto = exports.RoleDto || (exports.RoleDto = {}));
var ActionDto;
(function (ActionDto) {
    // User Actions
    ActionDto["ManageUser"] = "users:manage";
    // Workspace Actions
    ActionDto["ManageWorkspace"] = "workspaces:manage";
    ActionDto["CreateWorkspace"] = "workspaces:create";
    ActionDto["ReadWorkspace"] = "workspaces:read";
    ActionDto["UpdateWorkspace"] = "workspaces:update";
    ActionDto["DeleteWorkspace"] = "workspaces:delete";
    // Deployment Actions
    ActionDto["CreateDeployment"] = "deployments:create";
    ActionDto["ReadDeployment"] = "deployments:read";
    ActionDto["ProxyDeployment"] = "deployments:proxy";
    ActionDto["UpdateDeployment"] = "deployments:update";
    ActionDto["DeleteDeployment"] = "deployments:delete";
    // Wiki Actions
    ActionDto["CreateWiki"] = "wiki:create";
    ActionDto["ReadWiki"] = "wiki:read";
    ActionDto["UpdateWiki"] = "wiki:update";
    ActionDto["DeleteWiki"] = "wiki:delete";
    // Wiki Section Actions
    ActionDto["CreateWikiSection"] = "wiki_sections:create";
    ActionDto["ReadWikiSection"] = "wiki_sections:read";
    ActionDto["UpdateWikiSection"] = "wiki_sections:update";
    ActionDto["DeleteWikiSection"] = "wiki_sections:delete";
    // Wiki Page Actions
    ActionDto["CreateWikiPage"] = "wiki_pages:create";
    ActionDto["ReadWikiPage"] = "wiki_pages:read";
    ActionDto["UpdateWikiPage"] = "wiki_pages:update";
    ActionDto["DeleteWikiPage"] = "wiki_pages:delete";
    // Project Actions
    ActionDto["CreateProject"] = "projects:create";
    ActionDto["ReadProject"] = "projects:read";
    ActionDto["UpdateProject"] = "projects:update";
    ActionDto["DeleteProject"] = "projects:delete";
    // Project Lane Actions
    ActionDto["CreateProjectLane"] = "project_lanes:create";
    ActionDto["ReadProjectLane"] = "project_lanes:read";
    ActionDto["UpdateProjectLane"] = "project_lanes:update";
    ActionDto["DeleteProjectLane"] = "project_lanes:delete";
    // Project Task Actions
    ActionDto["CreateProjectTask"] = "project_tasks:create";
    ActionDto["ReadProjectTask"] = "project_tasks:read";
    ActionDto["UpdateProjectTask"] = "project_tasks:update";
    ActionDto["DeleteProjectTask"] = "project_tasks:delete";
})(ActionDto = exports.ActionDto || (exports.ActionDto = {}));
exports.WorkspaceActionsDto = [
    ActionDto.CreateWorkspace,
    ActionDto.ReadWorkspace,
    ActionDto.UpdateWorkspace,
    ActionDto.DeleteWorkspace,
];
exports.InWorkspaceActions = [
    ActionDto.CreateDeployment,
    ActionDto.ReadDeployment,
    ActionDto.ProxyDeployment,
    ActionDto.UpdateDeployment,
    ActionDto.DeleteDeployment,
    ActionDto.CreateWiki,
    ActionDto.ReadWiki,
    ActionDto.UpdateWiki,
    ActionDto.DeleteWiki,
    ActionDto.CreateWikiSection,
    ActionDto.ReadWikiSection,
    ActionDto.UpdateWikiSection,
    ActionDto.DeleteWikiSection,
    ActionDto.CreateWikiPage,
    ActionDto.ReadWikiPage,
    ActionDto.UpdateWikiPage,
    ActionDto.DeleteWikiPage,
    ActionDto.CreateProject,
    ActionDto.ReadProject,
    ActionDto.UpdateProject,
    ActionDto.DeleteProject,
    ActionDto.CreateProjectLane,
    ActionDto.ReadProjectLane,
    ActionDto.UpdateProjectLane,
    ActionDto.DeleteProjectLane,
    ActionDto.CreateProjectTask,
    ActionDto.ReadProjectTask,
    ActionDto.UpdateProjectTask,
    ActionDto.DeleteProjectTask,
];
let RolesAndPermissionsDto = class RolesAndPermissionsDto {
};
__decorate([
    class_transformer_1.Expose()
], RolesAndPermissionsDto.prototype, "roles", void 0);
__decorate([
    class_transformer_1.Expose()
], RolesAndPermissionsDto.prototype, "permissions", void 0);
RolesAndPermissionsDto = __decorate([
    class_transformer_1.Exclude()
], RolesAndPermissionsDto);
exports.RolesAndPermissionsDto = RolesAndPermissionsDto;
// tslint:disable-next-line: max-classes-per-file
let PermissionDto = class PermissionDto extends RolesAndPermissionsDto {
};
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => users_1.UserDto)
], PermissionDto.prototype, "user", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => Object),
    class_transformer_1.Transform((value) => mapToJson(value))
], PermissionDto.prototype, "workspaces", void 0);
PermissionDto = __decorate([
    class_transformer_1.Exclude()
], PermissionDto);
exports.PermissionDto = PermissionDto;
/**
 * Converts a map to JSON
 * @param map the map to convert
 * @returns json map
 */
const mapToJson = (map) => {
    const obj = {};
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
};
