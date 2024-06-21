export interface MovieDto {
  id: number;
  name: string;
  status: Status;
  image: string;
  creationDate: Date;
}

export enum Status {
  IN_PROGRESS = 'IN PROGRESS',
  COMPLETED = 'COMPLETED',
}
