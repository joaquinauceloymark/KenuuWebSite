export interface UserSession {
  accountID: number;
  accountNumber: string;
  firstName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  gender: string;
  birthDate: string;
  status: string;
  mobilePhone: string;
  pointsAccumulated: number;
  pointsBonus: number;
  pointsRedeemed: number;
  pointsAvailable: number;
  walletID: number;
  reservedField1: string;
  reservedField2?: any;
  reservedField3?: any;
  walletName: string;
  accountTree?: any;
  accountsLevel?: any;
  walletPoint: number;
  walletLevelId: number;
  walletLevelName: string;
  accountLevelID: number;
  subEntities?: any;
  password: string;
  retries: number;
  passwordExpirationDate: string;
  identificacion: string;
  enrollmentDate: Date;
}
