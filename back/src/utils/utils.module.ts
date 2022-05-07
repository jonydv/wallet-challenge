import { Module } from '@nestjs/common';
import { DateModule } from './date/date.module';
import { ApiDataModule } from './api-data/api-data.module';

@Module({
    imports: [
        DateModule,
        ApiDataModule
    ],
    exports: [
        DateModule,
        ApiDataModule
    ]
})
export class UtilsModule {}
