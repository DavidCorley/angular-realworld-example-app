import { Company } from './company.model';

export interface PostUser {
  id: number;
  name: string;
  username: string;
  email: string;
  company: Company;
}
