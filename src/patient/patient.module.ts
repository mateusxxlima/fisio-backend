import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { PatientRepository } from './patient.repository';

import { TreatmentModule } from 'src/treatment/treatment.module';

@Module({
  imports: [TypeOrmModule.forFeature([PatientRepository]), TreatmentModule],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService]
})
export class PatientModule {}
