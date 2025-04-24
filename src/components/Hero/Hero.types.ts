export interface Stat {
  value: string;
  label: string;
}

export interface TextData {
  header: string;
  subHeader: string;
  stats: Stat[];
}
