import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { QueryDto } from 'src/common/query.dto';
import { StarshipDto, StarshipsDto } from './dto';
import { StarshipsService } from './starships.service';

@Controller('starships')
@ApiTags('starships')
export class StarshipsController {
  constructor(private readonly starshipsService: StarshipsService) {}

  @Get()
  @ApiOkResponse({ type: StarshipsDto })
  @ApiQuery({ name: 'search', required: false, type: String })
  async findAll(@Query() query: QueryDto) {
    return this.starshipsService.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: StarshipDto })
  findOne(@Param('id') id: string) {
    return this.starshipsService.findOne(+id);
  }

  // @Get()
  // findAll() {
  //   return this.starshipsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.starshipsService.findOne(+id);
  // }
}
