import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { fetchData } from 'src/common/http.utils';
import { PeopleDto, PersonDto } from './dto';
import { QueryDto } from 'src/common/query.dto';

@Injectable()
export class PeopleService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.baseUrlSwapi = this.configService.get<string>('baseUrlSwapi');
  }

  private readonly baseUrlSwapi: string;

  async findAll(query: QueryDto) {
    let url = `${this.baseUrlSwapi}/people/`;
    const { search, page } = query;

    if (search) {
      url += `?search=${search}`;
    }

    if (page) {
      url += `${search ? '&' : '?'}page=${page}`;
    }

    return fetchData<PeopleDto>(this.httpService, url);
  }
  findOne(id: number) {
    return fetchData<PersonDto>(
      this.httpService,
      `${this.baseUrlSwapi}/people/${id}`,
    );
  }
}
