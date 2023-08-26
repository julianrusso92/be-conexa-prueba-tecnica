import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { fetchData } from 'src/common/http.utils';

@Injectable()
export class FilmsService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.baseUrlSwapi = this.configService.get<string>('baseUrlSwapi');
  }

  private readonly baseUrlSwapi: string;
  async findAll() {
    return fetchData(this.httpService, `${this.baseUrlSwapi}/films`);
  }
  async findOne(id: number) {
    return fetchData(this.httpService, `${this.baseUrlSwapi}/films/${id}`);
  }
}
