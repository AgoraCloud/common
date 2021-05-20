import { UserDto } from './../users/user.dto';
import { IdWithTimestampDto } from '../base.dto';
import { WorkspaceDto } from '../workspaces';
export declare class ProjectDto extends IdWithTimestampDto {
    readonly name: string;
    readonly description: string;
    readonly user: UserDto;
    readonly workspace: WorkspaceDto;
}
