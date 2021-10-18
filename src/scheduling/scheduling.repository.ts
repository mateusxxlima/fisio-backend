import { EntityRepository, Repository } from "typeorm";
import { Scheduling } from "./entities/scheduling.entity";

@EntityRepository(Scheduling)
export class SchedulingRepository extends Repository<Scheduling> {}