import {
  BaseEntity,
  Entity,
  Unique,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { MedicalRecord } from '../../medical-record/entities/medical-record.entity';
import { Treatment } from '../../treatment/entities/treatment.entity';
import { Scheduling } from '../../scheduling/entities/scheduling.entity';

@Entity()
@Unique(['cpf'])
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  name: string;
  
  @Column({ nullable: false, type: 'char', length: 11 })
  cpf: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  profession: string;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  phone: string;
  
  @Column({ nullable: false, type: 'varchar', length: 30 })
  email: string;

  @Column({ nullable: false, type: 'date' })
  birthDate: Date;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  password: string;

  @Column({ nullable: false, type: 'int' })
  timesAWeek: number;
  
  @Column({ nullable: false, type: 'varchar', length: 10 })
  cep: number;

  @Column({ nullable: false, type: 'int' })
  houseNumber: number;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  district: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  street: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  city: string;

  @ManyToOne(() => Treatment, (treatment) => treatment.patients)
  treatment?: Treatment;

  @OneToMany(() => Scheduling, scheduling => scheduling.patient)
  scheduling?: Scheduling[];

  @OneToMany(() => MedicalRecord, medicalRecord => medicalRecord.patient)
  medicalRecord?: MedicalRecord[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
