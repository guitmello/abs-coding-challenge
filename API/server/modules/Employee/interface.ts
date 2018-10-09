export interface IEmployee {
  id: number;
  employee_name: string;
  employee_lastName: string;
  employee_participation: number;
}

export interface IEmployeeDetail extends IEmployee {
  id: number;
  employee_name: string;
  employee_lastName: string;
  employee_participation: number;
}

export function createEmployee({
  id,
  employee_name,
  employee_lastName,
  employee_participation
}: any): IEmployee {
  return {
    id,
    employee_name,
    employee_lastName,
    employee_participation
  };
}

export function createEmployees(data: any[]): IEmployee[] {
  return data.map(createEmployee);
}

export function createEmployeeById({
  id,
  employee_name,
  employee_lastName,
  employee_participation
}: any): IEmployeeDetail {
  return {
    id,
    employee_name,
    employee_lastName,
    employee_participation
  };
}
