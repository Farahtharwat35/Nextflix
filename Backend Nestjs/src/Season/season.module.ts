import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Season, SeasonSchema } from './Model/season.schema';
import { SeasonController } from '../Season/Controller/season.controller';
import { SeasonService } from '../Season/Controller/season.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Season.name, schema: SeasonSchema }]),
  ],
  controllers: [SeasonController],
  providers: [SeasonService],
})
export class SeasonModule {}
