export interface Doctor {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  schedule?: string;
  specialty?: string;
  specialtyIcon?: string;
  availableToday?: boolean;
  icon?: string;
  iconPosition?: string;
}