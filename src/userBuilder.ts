import { IUser } from "./userInterface";

export class UserBuilder {
  private data: IUser;

  constructor() {
    this.data = {
      personalDetails: {
        age: 0,
        name: "",
      },
    };
  }

  setPersonalDetails (details: IUser['personalDetails']) : this {
    this.data.personalDetails = details;
    return this;
  }

  setEmploymentDetails (details: IUser['employementDetails']) : this {
    if(!details || Object.keys(details).length === 0) return this;
    this.data.employementDetails = details;
    return this;
  }

  setCompensationDetails (details: IUser['compensation']) : this {
    if(!details || Object.keys(details).length === 0) return this;
    this.data.compensation = details;
    return this;
  }

  build () : IUser {
    return this.data;
  }
}
