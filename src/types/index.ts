export interface CaseSummary {
  active: number;
  pending: number;
  closed: number;
}

export interface Document {
  name: string;
  version: string;
}

export interface TimeTracking {
  attorney: string;
  hours: number;
}
