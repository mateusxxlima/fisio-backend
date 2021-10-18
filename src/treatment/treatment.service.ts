import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';
import { TreatmentRepository } from './treatment.repository';

@Injectable()
export class TreatmentService {

  constructor(
    @InjectRepository(TreatmentRepository) private treatmentRepository: TreatmentRepository
  ) {}

  create(createTreatmentDto: CreateTreatmentDto) {
    return this.treatmentRepository.save(createTreatmentDto);
  }

  findAll() {
    return this.treatmentRepository.find();
  }

  findOne(id: number) {
    return this.treatmentRepository.findOne(id);
  }

  update(id: number, updateTreatmentDto: UpdateTreatmentDto) {
    return `This action updates a #${id} treatment`;
  }

  remove(id: number) {
    return `This action removes a #${id} treatment`;
  }
}
