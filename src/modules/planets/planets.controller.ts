import { Controller, Get, Param } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('planets')
@ApiTags('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get()
  async findAll() {
    const result = await this.planetsService.findAll();
    console.log(
      '🚀 ~ file: planets.controller.ts:13 ~ PlanetsController ~ findAll ~ result:',
      result,
    );
    return result;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planetsService.findOne(+id);
  }
}
