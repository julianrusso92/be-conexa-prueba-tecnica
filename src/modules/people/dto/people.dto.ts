import { ApiProperty } from '@nestjs/swagger';
import { PersonDto } from './person.dto';

export class PeopleDto {
  @ApiProperty()
  count: number;
  @ApiProperty()
  next: null | string;
  @ApiProperty()
  previous: null | string;
  @ApiProperty({ type: [PersonDto] })
  results: PersonDto[];
}
