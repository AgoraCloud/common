import { UserDto } from './../../users/user.dto';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';
export declare class WikiSectionDto extends IdWithTimestampDto {
    readonly name: string;
    readonly workspace: WorkspaceDto;
    readonly user: UserDto;
}
