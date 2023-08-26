import { Controller, Get, Param } from '@nestjs/common';
import { StarshipsService } from './starships.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('starships')
@ApiTags('starships')
export class StarshipsController {
  constructor(private readonly starshipsService: StarshipsService) {}

  @Get()
  findAll() {
    return this.starshipsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.starshipsService.findOne(+id);
  }
}
