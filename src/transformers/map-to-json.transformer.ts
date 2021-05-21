import { RolesAndPermissionsDto } from './../dto/authorization/permission.dto';

/**
 * Converts a map to JSON
 * @param map the map to convert
 * @returns json map
 */
export const mapToJson = (map: Map<string, RolesAndPermissionsDto>) => {
  const obj: Record<string, RolesAndPermissionsDto> = {};
  map.forEach((value: RolesAndPermissionsDto, key: string) => {
    obj[key] = value;
  });
  return obj;
};
