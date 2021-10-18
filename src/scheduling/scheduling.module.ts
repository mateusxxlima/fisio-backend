import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SchedulingService } from './scheduling.service';
import { SchedulingController } from './scheduling.controller';
import { SchedulingRepository } from './scheduling.repository';

import { TherapistModule } from '../therapist/therapist.module';
import { PatientModule } from '../patient/patient.module';

@Module({
  imports: [TypeOrmModule.forFeature([SchedulingRepository]), TherapistModule, PatientModule],
  controllers: [SchedulingController],
  providers: [SchedulingService]
})
export class SchedulingModule {}
