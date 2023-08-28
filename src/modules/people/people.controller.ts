import { Controller, Get, Param, Query } from '@nestjs/common';
import { PeopleService } from './people.service';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PeopleDto, PersonDto } from './dto';
import { PersonEntity } from './entities/person.entity';
import { QueryDto } from 'src/common/query.dto';

@Controller('people')
@ApiTags('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  @ApiOkResponse({ type: PeopleDto })
  @ApiQuery({ name: 'search', required: false, type: String })
  async findAll(@Query() query: QueryDto) {
    return this.peopleService.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: PersonDto })
  findOne(@Param('id') id: string) {
    const person = this.peopleService.findOne(+id);
    return new PersonEntity(person);
  }
}
