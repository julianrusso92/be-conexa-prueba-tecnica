import { ApiProperty } from '@nestjs/swagger';

export class PlanetDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  rotation_period: string;
  @ApiProperty()
  orbital_period: string;
  @ApiProperty()
  diameter: string;
  @ApiProperty()
  climate: string;
  @ApiProperty()
  gravity: string;
  @ApiProperty()
  terrain: string;
  @ApiProperty()
  surface_water: string;
  @ApiProperty()
  population: string;
  @ApiProperty()
  residents: string[];
  @ApiProperty()
  films: string[];
  @ApiProperty()
  created: Date;
  @ApiProperty()
  edited: Date;
  @ApiProperty()
  url: string;
}
