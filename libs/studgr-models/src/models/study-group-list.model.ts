export interface IStudyGroupListPartialState {
  allStudyGroups: IStudyGroupList[];
  studentStudyGroups?: IStudyGroupList[];
}

export interface IStudyGroupList {
  id: number;
  studentId: number;
  name: string;
  time?: string;
  description: string;
  studyMaterial?: string;
  place?: string;
  day?: string;
  meetingsCommitment: string;
  periodity: string;
  minMembers?: number;
  maxMembers?: number;
  additionalInfo?: string;
  status: string;
  acceptingMembers: string;
}
