import { Treatment } from './entities/treatment.entity';
import { EntityRepository, Repository } from 'typeorm';


@EntityRepository(Treatment)
export class TreatmentRepository extends Repository<Treatment> {}