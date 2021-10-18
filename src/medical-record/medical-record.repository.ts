import { EntityRepository, Repository } from 'typeorm';
import { MedicalRecord } from './entities/medical-record.entity';

@EntityRepository(MedicalRecord)
export class MedicalRecordRepository extends Repository<MedicalRecord> {}