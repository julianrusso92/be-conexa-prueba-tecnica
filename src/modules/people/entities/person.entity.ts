export class PersonEntity {
  constructor(partial: Partial<PersonEntity>) {
    Object.assign(this, partial);
  }
}
