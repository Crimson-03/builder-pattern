import { UserBuilder } from "./userBuilder";

const userInfo = new UserBuilder()
  .setPersonalDetails({ age: 23, name: "krishan" })
  .setCompensationDetails({ current: 969000, expected: 1500000 })
  .setEmploymentDetails({ currentCompany: "rupyy", totalYOE: 1 })
  .build();

console.log('userInfo::::', userInfo);