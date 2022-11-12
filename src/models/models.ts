export interface ILocation {
  lat: number;
  long: number;
}

export interface IJobItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: ILocation;
  pictures: string[];
  createdAt: Date;
  updatedAt: Date;
  description: string;
  employment_type: string[];
}

export interface IListItemProps {
  id: string
}

export interface IPaginationProps {
  allPages: number,
  activePage: number,
  changePage: (num: number) => void
}