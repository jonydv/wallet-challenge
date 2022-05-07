import { Injectable } from '@nestjs/common';

@Injectable()
export class DateService {
    getYearOldFromTimestamp(transactionTimestamp: number): number {
        if(transactionTimestamp === 0){
            return transactionTimestamp;
        }
        const today = new Date(Date.now());
        const transactionDate = new Date(transactionTimestamp * 1000);
        let age = today.getFullYear() - transactionDate.getFullYear();
        const month = today.getMonth() - transactionDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < transactionDate.getDate())) {
            age--;
        }
        return age; 
    }
}
