import { IFlattenedUser } from '@pages/EmployeesPage/EmployeesPage.types';

export interface IEmployeesTableProps {
  users: IFlattenedUser[];
  isLoading: boolean;
}
