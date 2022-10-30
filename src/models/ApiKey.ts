import { Column, Entity } from 'typeorm';

@Entity('ApiKey', { schema: 'public' })
export class ApiKey {
  @Column('character varying', { primary: true, name: 'key' })
  key: string;
}
