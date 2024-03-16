import { WeekDaysEnum } from '../enums/week-days.enum';

export interface DeliveryInstruction {
  id: string;
  offDays: Array<WeekDaysEnum>;
  instructionText: string;
}
