import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TherapistService } from './therapist.service';
import { CreateTherapistDto } from './dto/create-therapist.dto';
import { UpdateTherapistDto } from './dto/update-therapist.dto';

@Controller('therapist')
export class TherapistController {
  constructor(private readonly therapistService: TherapistService) {}

  @Post()
  create(@Body() createTherapistDto: CreateTherapistDto) {
    return this.therapistService.create(createTherapistDto);
  }

  @Get()
  findAll() {
    return this.therapistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.therapistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTherapistDto: UpdateTherapistDto) {
    return this.therapistService.update(+id, updateTherapistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.therapistService.remove(+id);
  }
}
