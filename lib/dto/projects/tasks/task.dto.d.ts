import { UserDto } from './../../users/user.dto';
import { ProjectLaneDto } from './../lanes/lane.dto';
import { ProjectDto } from './../project.dto';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';
export declare class ProjectTaskDto extends IdWithTimestampDto {
    readonly title: string;
    readonly description?: string;
    readonly user: UserDto;
    readonly workspace: WorkspaceDto;
    readonly project: ProjectDto;
    readonly lane: ProjectLaneDto;
}
