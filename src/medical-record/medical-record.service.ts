import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientService } from 'src/patient/patient.service';

import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { MedicalRecordRepository } from './medical-record.repository';

@Injectable()
export class MedicalRecordService {

  constructor(
    @InjectRepository(MedicalRecordRepository) private medicalRecordRepository: MedicalRecordRepository,
    private readonly patientService: PatientService
  ) {}

  async create(createMedicalRecordDto, patientId) {
    const patient = await this.patientService.findOne(patientId)
    createMedicalRecordDto.patient = patient;
    return this.medicalRecordRepository.save(createMedicalRecordDto);
  }

  findAll() {
    return this.medicalRecordRepository.find({ relations: ['patient'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalRecord`;
  }

  update(id: number, updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return `This action updates a #${id} medicalRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalRecord`;
  }
}
