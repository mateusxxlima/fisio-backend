import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientRepository } from 'src/patient/patient.repository';
import { TherapistRepository } from 'src/therapist/therapist.repository';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(TherapistRepository) private therapistRepository: TherapistRepository,
    @InjectRepository(PatientRepository) private patientRepository: PatientRepository
  ) {}

  async findOne(email: string) {
    let user;
    user = await this.therapistRepository.findOne({ email })
    if (!user) user = await this.patientRepository.findOne({ email })
    return user;
  }
}