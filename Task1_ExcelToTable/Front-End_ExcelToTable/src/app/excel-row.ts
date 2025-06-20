export interface ExcelRow {
    AceID: string,
  Name: string,
  Email: string,
  CollegeName: string,
  Practice: string,
  DateOfJoining: string,
    [key: string]: string | number;
}
