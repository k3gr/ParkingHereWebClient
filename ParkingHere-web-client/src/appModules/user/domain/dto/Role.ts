import { RoleEnum } from "../enumerated/RoleEnum";

export interface IRole {
   id: number;
   name: RoleEnum;
}

export class RoleDTO implements IRole {
    constructor(
       public id: number = 0,
       public name: RoleEnum = RoleEnum.User,
    ) {}
 }

export default class Role extends RoleDTO {
    constructor(dto?: RoleDTO) {
       super();
       if (!dto) dto = new RoleDTO();
 
       Object.assign(this, dto);
    }
 }