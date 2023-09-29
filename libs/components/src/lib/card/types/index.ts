export type StatCardVariant = 'white' | 'dark' | 'coral';

export interface StatCardContent {
  id: number;
  header: string;
  description: string;
  color: StatCardVariant;
}
