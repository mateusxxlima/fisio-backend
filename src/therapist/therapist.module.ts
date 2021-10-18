import { Module } from '@nestjs/common';
import { TherapistService } from './therapist.service';
import { TherapistController } from './therapist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TherapistRepository } from './therapist.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TherapistRepository])],
  controllers: [TherapistController],
  providers: [TherapistService],
  exports: [TherapistService]
})
export class TherapistModule {}
