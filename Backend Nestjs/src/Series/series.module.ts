import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Series, SeriesSchema } from './Model/series.schema';
import { SeriesController } from './Controller/series.controller';
import { SeriesService } from '../Series/Controller/series.service';
import { RolesGuard } from '../Middlewares/roles.guard';

@Module({
  imports: [MongooseModule.forFeature([{ name: Series.name, schema: SeriesSchema }])],
  controllers: [SeriesController],
  providers: [SeriesService, RolesGuard],
  exports: [SeriesService]
})
export class SeriesModule { }
