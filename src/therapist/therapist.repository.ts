import { EntityRepository, Repository } from 'typeorm';
import { Therapist } from './entities/therapist.entity';


@EntityRepository(Therapist)
export class TherapistRepository extends Repository<Therapist> {}