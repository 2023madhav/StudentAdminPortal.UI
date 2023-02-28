import { addressUi } from "./address-ui.model";
import { genderUi } from "./gender-ui.model";


export interface StudentUi{
  id:string,
  firstName: string,
  lastName: string,
  dateOfBirth:string,
  email:string,
  mobile:number,
  profileImageUrl:string,
  genderId: string,
  gender:genderUi,
  address:addressUi

}
