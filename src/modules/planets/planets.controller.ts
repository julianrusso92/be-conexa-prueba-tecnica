import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { QueryDto } from 'src/common/query.dto';
import { PlanetsService } from './planets.service';
import { FilmDto, FilmsDto } from '../films/dto';
@Controller('planets')
@ApiTags('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}
  @Get()
  @ApiOkResponse({ type: FilmsDto })
  @ApiQuery({ name: 'search', required: false, type: String })
  async findAll(@Query() query: QueryDto) {
    return this.planetsService.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: FilmDto })
  findOne(@Param('id') id: string) {
    return this.planetsService.findOne(+id);
  }
}
