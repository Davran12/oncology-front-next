export type Gender = "male" | "female";

export interface DepartmentHead {
  fullName: string;
  gender: Gender;
  regalia: string[];
  experienceYears: number; 
  quote?: string | null;
  photoUrl: string;
}

export interface Direction {
  id: string;
  icon: string; 
  title: string;
  description: string;
}
