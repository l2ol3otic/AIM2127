import { FormGroup } from "@angular/forms";

export interface IloginComponent{
    Url: any;
    form: FormGroup
    onSubmit(): void; 
}
export interface Ilogin {
    username: string,
    password: string,
}