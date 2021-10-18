import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTherapistDto } from './dto/create-therapist.dto';
import { UpdateTherapistDto } from './dto/update-therapist.dto';
import { TherapistRepository } from './therapist.repository';

@Injectable()
export class TherapistService {

  constructor(@InjectRepository(TherapistRepository) private therapistRepository: TherapistRepository) {}

  create(createTherapistDto) {
    createTherapistDto.role = 'adm';
    return this.therapistRepository.save(createTherapistDto);
  }

  findAll() {
    return this.therapistRepository.find()
  }

  findOne(id: number) {
    return this.therapistRepository.findOne(id);
  }

  update(id: number, updateTherapistDto: UpdateTherapistDto) {
    return `This action updates a #${id} therapist`;
  }

  remove(id: number) {
    return `This action removes a #${id} therapist`;
  }
}
