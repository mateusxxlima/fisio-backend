import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MedicalRecordService } from './medical-record.service';
import { MedicalRecordController } from './medical-record.controller';
import { MedicalRecordRepository } from './medical-record.repository';

import { PatientModule } from '../patient/patient.module';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalRecordRepository]), PatientModule],
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService]
})
export class MedicalRecordModule {}
