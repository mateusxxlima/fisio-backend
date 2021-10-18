import { Module } from '@nestjs/common';
import { TreatmentService } from './treatment.service';
import { TreatmentController } from './treatment.controller';
import { TreatmentRepository } from './treatment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TreatmentRepository])],
  controllers: [TreatmentController],
  providers: [TreatmentService],
  exports: [TreatmentService]
})
export class TreatmentModule {}
