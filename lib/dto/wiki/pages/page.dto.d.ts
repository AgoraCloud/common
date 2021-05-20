import { WikiSectionDto } from './../sections/section.dto';
import { UserDto } from './../../users/user.dto';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';
export declare class WikiPageDto extends IdWithTimestampDto {
    readonly title: string;
    readonly body: string;
    readonly workspace: WorkspaceDto;
    readonly user: UserDto;
    readonly section: WikiSectionDto;
}
