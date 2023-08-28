import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '../enum/gender.enum';

export class PersonDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  height: string;
  @ApiProperty()
  mass: string;
  @ApiProperty()
  hair_color: string;
  @ApiProperty()
  skin_color: string;
  @ApiProperty()
  eye_color: string;
  @ApiProperty()
  birth_year: string;
  @ApiProperty({
    enum: Gender,
    example: [Gender.Female, Gender.Male, Gender.NA], //no deberia ser un array
  })
  gender: Gender;
  @ApiProperty()
  homeworld: string;
  @ApiProperty()
  films: string[];
  @ApiProperty()
  species: string[];
  @ApiProperty()
  vehicles: string[];
  @ApiProperty()
  starships: string[];
  @ApiProperty()
  created: string;
  @ApiProperty()
  edited: string;
  @ApiProperty()
  url: string;
}
