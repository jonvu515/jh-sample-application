import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '54eaa242-4116-493c-9777-4a47b1628280',
};

export const sampleWithPartialData: IAuthority = {
  name: '779f5cad-fc52-455f-b30c-e2d6b3d298c3',
};

export const sampleWithFullData: IAuthority = {
  name: 'eb38fe07-a3e1-4237-ab8c-beac86f23942',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
