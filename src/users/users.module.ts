import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';

import { PatientRepository } from '../patient/patient.repository';
import { TherapistRepository } from '../therapist/therapist.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PatientRepository, TherapistRepository])],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
