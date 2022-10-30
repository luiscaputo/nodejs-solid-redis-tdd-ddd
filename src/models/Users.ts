import { Column, Entity } from 'typeorm';
import { v4 as NewId } from 'uuid';

@Entity('Users', { schema: 'public' })
export class Users {
  constructor() {
    if (!this.id) {
      this.id = NewId();
    }
  }
  @Column('character varying', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'name' })
  name: string;

  @Column('character varying', { name: 'email' })
  email: string;

  @Column('character varying', { name: 'password' })
  password: string;

  @Column('boolean', { name: 'admin', default: () => 'false' })
  admin: boolean;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('timestamp without time zone', {
    name: 'update_at',
    default: () => 'now()',
  })
  updateAt: Date;
}
