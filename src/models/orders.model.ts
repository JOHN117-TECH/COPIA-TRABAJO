export type PeriodsTime = '1 week' | '1 month' | '3 months' | '6 months' | '1 year';
export interface SearchFormProps {
   currentStatus: string; 
   setCurrentStatus: (status: string) => void; 
   periodTime: string; 
   setPeriodTime: (time: PeriodsTime) => void;
   totalOrders: number
}