export interface details {
  id?: number;
  name?: string;
  role?: string;
  image?: string;
  industryexperience?: any;
  researchexperience?: any;
  designskills?: any;
  projectmanagement?: any;
  creativity?: any;
  programmingskills?: any;
  industryknowledge?: any;
  manufacturing?: any;
  selfmotivation?: any;
  stamina?: any;
  reflex?: any;
  intelligence?: any;
  healingfactor?: any;
  sarcasm?: any;
  speed?: any;
  heroimg?: string;
  email?: string;
  linkedin?: string;
  number?: string;
  serialno ?: number
}

export interface Product {
  id?: string;
  name?: string;
  type?: string;
  image?: string;
  brochure?: string;
  description: any;
  technicalspecs?: any;
  presentInHomePage?: boolean;
  serialno?: any;
  youtubeId?: any;
}

export interface faq {
  question?: string;
  answer?: string;
  id?: string;
  productId?: string;
}

export interface image {
  id?: string;
  productId?: string;
  location?: string;
}

export interface Service {
  price: string;
  id?: string;
  servicetype?: string;
  imglocation?: string;
  name?: string;
}

export interface requirements {
  id?: string;
  name?: string;
  email?: string;
  designation?: string;
  companyname?: string;
  mobile?: string;
  address?: string;
  fieldofservice?: string;
  requirements?: string;
  filelocation?: string;
  date?: any;
  serviceid ?: any;
  completedby ?: any;
  status ?: any;
  completedon ?: any;
}
export interface applications {
  id?: string;
  name?: string;
  email?: string;
  mobile?: string;
  careertitle?: string;
  careerdomain?: string;
  date?: string;
  resumelocation?: string;
}

export interface career {
  id?: string;
  title?: string;
  description?: string;
  type?: string;
  experience?: string;
  domain?: string;
  skills?: string;
  postedon?: string;
  isactive: boolean;
  noofopenings?: number;
  totalregistrants?: number;
  location?: string;
}

export const ROLES = ["ADMIN", "ENGINEER", "MARKETING","INTERN","TECHNICIAN","HR"];

export interface User {
  userid?: string;
  name?: string;
  role?: string;
  jobtitle?: string;
}

export interface Timesheet {
  id?: string;
  starttime?: string;
  endtime?: string;
  noofhours?: string;
  updatedon?: string;
  userid?: string;
  description?: string;
  activity: string;
}

export interface Leave {
  id?: string;
  startdate?: string;
  enddate?: string;
  noofdays?: string;
  updatedon?: string;
  userid?: string;
  reason?: string;
  isapproved?: string;
}
