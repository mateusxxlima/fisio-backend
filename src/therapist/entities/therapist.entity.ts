import {
  BaseEntity,
  Entity,
  Unique,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { Scheduling } from '../../scheduling/entities/scheduling.entity';

@Entity()
@Unique(['cpf'])
export class Therapist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  name: string;
  
  @Column({ nullable: false, type: 'char', length: 11 })
  cpf: string;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  phone: string;

  @Column({ nullable: false, type: 'varchar', length: 30 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  password: string;

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

  @Column({ nullable: false, type: 'varchar', length: 10 })
  role: string;

  @OneToMany(() => Scheduling, scheduling => scheduling.therapist)
  scheduling: Scheduling[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
