import {
  BaseEntity,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Patient } from '../../patient/entities/patient.entity';

@Entity()
export class MedicalRecord extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, type: 'text' })
  diseaseHistory: string;

  @Column({ nullable: true, type: 'text' })
  previousIllnessHistory: string;

  @Column({ nullable: true, type: 'text' })
  medicines: string;

  @Column({ nullable: true, type: 'varchar', length: 255 })
  image: string;

  @Column({ nullable: true, type: 'text' })
  observations: string;

  @ManyToOne(() => Patient, patient => patient.medicalRecord)
  patient?: Patient;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
