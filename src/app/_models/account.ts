import { Role } from './role';

export class Account {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  relationship: string;
  gender: string;
  age: number;
  jwtToken?: string;
}
