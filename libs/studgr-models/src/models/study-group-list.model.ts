export interface IStudyGroupListPartialState {
  allStudyGroups: IStudyGroupList[];
  studentStudyGroups?: IStudyGroupList[];
}

export interface IStudyGroupListDBResponse {
  id_study_group: number;
  id_student_administrator: number;
  name: string;
  time?: string;
  description: string;
  study_material?: string;
  place?: string;
  day?: string;
  meetings_commitment: string;
  periodity: string;
  min_members?: number;
  max_members?: number;
  additional_info?: string;
  status: string;
  accepting_members: string;
}

export interface IStudyGroupList {
  studyGroupId: number;
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
