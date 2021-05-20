import { UserDto } from './../../users/user.dto';
import { ProjectDto } from './../project.dto';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';
export declare class ProjectLaneDto extends IdWithTimestampDto {
    readonly name: string;
    readonly user: UserDto;
    readonly workspace: WorkspaceDto;
    readonly project: ProjectDto;
}
