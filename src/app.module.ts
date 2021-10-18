import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';

import { PatientModule } from './patient/patient.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { TreatmentModule } from './treatment/treatment.module';
import { MedicalRecordModule } from './medical-record/medical-record.module';
import { TherapistModule } from './therapist/therapist.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    PatientModule,
    TreatmentModule,
    MedicalRecordModule,
    TherapistModule,
    SchedulingModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
