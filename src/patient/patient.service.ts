import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TreatmentService } from 'src/treatment/treatment.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientRepository } from './patient.repository';

@Injectable()
export class PatientService {

  constructor(
    @InjectRepository(PatientRepository) private patientRepository: PatientRepository,
    private readonly treatmentService: TreatmentService
  ) {}

  async create(createPatientDto, treatmentId) {
    const treatment = await this.treatmentService.findOne(treatmentId);
    createPatientDto.treatment = treatment;
    try {
      const newPatient = await this.patientRepository.save(createPatientDto);
      return newPatient;
    } catch (err) {
      console.log(err)
    }
  }

  async findAll() {
    return this.patientRepository.find({ relations: ['treatment'] });
  }

  findOne(id: number) {
    return this.patientRepository.findOne(id, { relations: ['treatment'] });
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
