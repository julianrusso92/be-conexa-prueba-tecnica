import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { fetchData } from 'src/common/http.utils';
import { QueryDto } from 'src/common/query.dto';
import { StarshipDto, StarshipsDto } from './dto';

@Injectable()
export class StarshipsService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.baseUrlSwapi = this.configService.get<string>('baseUrlSwapi');
  }

  private readonly baseUrlSwapi: string;

  async findAll(query: QueryDto) {
    let url = `${this.baseUrlSwapi}/starships/`;
    const { search, page } = query;

    if (search) {
      url += `?search=${search}`;
    }

    if (page) {
      url += `${search ? '&' : '?'}page=${page}`;
    }

    return fetchData<StarshipsDto>(this.httpService, url);
  }
  findOne(id: number) {
    return fetchData<StarshipDto>(
      this.httpService,
      `${this.baseUrlSwapi}/starships/${id}`,
    );
  }
}
