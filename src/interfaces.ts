 export interface Ideveloper{
    id:number;
    name:string;
    email:string;
}
  export type IdeveloperRequest=Omit<Ideveloper,"id">


 export interface IDeveloperInfo{
    id:number;
    developerSince:Date;
    preferredOs:"linux"|"Windows"|"MacOs";
    developerId?:number;
 }
 export type IdeveloperInfoRequest =Omit<IDeveloperInfo,"id">