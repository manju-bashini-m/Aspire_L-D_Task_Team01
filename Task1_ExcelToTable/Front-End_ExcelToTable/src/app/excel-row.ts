export interface ExcelRow {
    Sno:number,
    FirstName:string,
    LastName:string,
    Email:string,
    Role:string,
    [key: string]: string | number;
}
