import {
  BaseEntity,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Therapist } from '../../therapist/entities/therapist.entity';
import { Patient } from '../../patient/entities/patient.entity';

@Entity()
export class Scheduling extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'date' })
  schedulingDate: Date;

  @Column({ nullable: false, type: 'date' })
  schedulingDateWasMade: Date;

  @ManyToOne(() => Therapist, therapist => therapist.scheduling)
  therapist?: Therapist;

  @ManyToOne(() => Patient, patient => patient.scheduling)
  patient?: Patient;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}