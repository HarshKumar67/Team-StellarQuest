
export enum PredictionStatus {
  Confirmed = 'Confirmed Exoplanet',
  Candidate = 'Candidate',
  FalsePositive = 'False Positive',
}

export interface PredictionResult {
  status: PredictionStatus;
  confidence: number;
  explanation: string;
}
