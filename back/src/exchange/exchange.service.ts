import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Exchange } from './exchange.model';
import { ApiDataService } from '../utils/api-data/api-data.service';

@Injectable()
export class ExchangeService {
    constructor(private apiDataService: ApiDataService) {}

    getExchanges(): Observable<Exchange>{
        //We Get the exchange rates for USD and EUR from a external API
        return this.apiDataService.getExchangesFromTheApi()
    }
}
