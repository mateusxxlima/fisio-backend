import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientService } from 'src/patient/patient.service';
import { TherapistService } from '../therapist/therapist.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UpdateSchedulingDto } from './dto/update-scheduling.dto';
import { SchedulingRepository } from './scheduling.repository';

@Injectable()
export class SchedulingService {

  constructor(
    @InjectRepository(SchedulingRepository) private schedulingRepository: SchedulingRepository,
    private readonly therapistService: TherapistService,
    private readonly patientService: PatientService,
  ) {}

  async create(createSchedulingDto, patientId, therapistId) {
    const therapist = await this.therapistService.findOne(therapistId)
    const patient = await this.patientService.findOne(patientId)
    createSchedulingDto.therapist = therapist;
    createSchedulingDto.patient = patient;
    return this.schedulingRepository.save(createSchedulingDto);
  }

  findAll() {
    return this.schedulingRepository.find({ relations: ['therapist'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} scheduling`;
  }

  update(id: number, updateSchedulingDto: UpdateSchedulingDto) {
    return `This action updates a #${id} scheduling`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheduling`;
  }
}
