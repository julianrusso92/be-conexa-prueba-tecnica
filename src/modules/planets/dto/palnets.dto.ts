import { ApiProperty } from '@nestjs/swagger';
import { PlanetDto } from './planet.dto';

export class PlanetsDto {
  @ApiProperty()
  count: number;
  @ApiProperty()
  next: null | string;
  @ApiProperty()
  previous: null | string;
  @ApiProperty({ type: [PlanetDto] })
  results: PlanetDto[];
}
