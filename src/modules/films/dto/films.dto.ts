import { ApiProperty } from '@nestjs/swagger';
import { FilmDto } from './film.dto';

export class FilmsDto {
  @ApiProperty()
  count: number;
  @ApiProperty()
  next: null | string;
  @ApiProperty()
  previous: null | string;
  @ApiProperty({ type: [FilmDto] })
  results: FilmDto[];
}
