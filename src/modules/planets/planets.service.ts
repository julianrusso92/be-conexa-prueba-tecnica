import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { fetchData } from 'src/common/http.utils';
import { QueryDto } from 'src/common/query.dto';
import { PlanetDto, PlanetsDto } from './dto';

@Injectable()
export class PlanetsService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.baseUrlSwapi = this.configService.get<string>('baseUrlSwapi');
  }

  private readonly baseUrlSwapi: string;

  async findAll(query: QueryDto) {
    let url = `${this.baseUrlSwapi}/planets/`;
    const { search, page } = query;

    if (search) {
      url += `?search=${search}`;
    }

    if (page) {
      url += `${search ? '&' : '?'}page=${page}`;
    }

    return fetchData<PlanetsDto>(this.httpService, url);
  }
  findOne(id: number) {
    return fetchData<PlanetDto>(
      this.httpService,
      `${this.baseUrlSwapi}/planets/${id}`,
    );
  }
  // constructor(
  //   private readonly httpService: HttpService,
  //   private configService: ConfigService,
  // ) {
  //   this.baseUrlSwapi = this.configService.get<string>('baseUrlSwapi');
  // }

  // private readonly baseUrlSwapi: string;
  // async findAll() {
  //   return fetchData(this.httpService, `${this.baseUrlSwapi}/planets`);
  // }
  // async findOne(id: number) {
  //   return fetchData(this.httpService, `${this.baseUrlSwapi}/planets/${id}`);
  // }
}
