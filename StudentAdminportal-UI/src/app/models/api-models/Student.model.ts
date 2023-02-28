import { Address } from "./Address.model";
import { Gender } from "./Gender.model";

export interface Student{
  id:string,
  firstName: string,
  lastName: string,
  dateOfBirth:string,
  email:string,
  mobile:number,
  profileImageUrl:string,
  genderId: string,
  gender:Gender,
  address:Address

}
