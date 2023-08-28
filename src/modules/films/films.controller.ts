import { Controller, Get, Param, Query } from '@nestjs/common';
import { FilmsService } from './films.service';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { FilmsDto } from './dto/films.dto';
import { QueryDto } from 'src/common/query.dto';
import { FilmDto } from './dto/film.dto';

@Controller('films')
@ApiTags('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  @ApiOkResponse({ type: FilmsDto })
  @ApiQuery({ name: 'search', required: false, type: String })
  async findAll(@Query() query: QueryDto) {
    return this.filmsService.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: FilmDto })
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(+id);
  }
}
