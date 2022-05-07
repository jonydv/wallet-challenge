import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiDataService } from './api-data.service';
import { DateModule } from '../date/date.module';

@Module({
  providers: [ApiDataService],
  imports: [HttpModule, DateModule],
  exports: [ApiDataService]
})
export class ApiDataModule {}
