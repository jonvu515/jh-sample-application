import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 10236,
  login: 'F9lkn@KPOm6e',
};

export const sampleWithPartialData: IUser = {
  id: 11826,
  login: 'B',
};

export const sampleWithFullData: IUser = {
  id: 25916,
  login: '!@gGKt3\\cR\\Go\\dFI',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
