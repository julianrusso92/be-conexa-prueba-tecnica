import { ApiProperty } from '@nestjs/swagger';
import { StarshipDto } from './starship.dto';

export class StarshipsDto {
  @ApiProperty()
  count: number;
  @ApiProperty()
  next: null | string;
  @ApiProperty()
  previous: null | string;
  @ApiProperty({ type: [StarshipDto] })
  results: StarshipDto[];
}
