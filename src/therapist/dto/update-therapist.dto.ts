import { PartialType } from '@nestjs/mapped-types';
import { CreateTherapistDto } from './create-therapist.dto';

export class UpdateTherapistDto extends PartialType(CreateTherapistDto) {}
