export interface IUser {
  personalDetails: {
    name: string;
    age: number;
  };
  employementDetails?: {
    totalYOE?: number;
    currentCompany?: string;
  };
  compensation?: {
    current?: number;
    expected?: number;
  };
}
