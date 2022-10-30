import { Column, Entity, OneToMany } from 'typeorm';
import { v4 as NewId } from 'uuid';

import { Products } from './Products';

@Entity('brands', { schema: 'public' })
export class Brands {
  constructor() {
    if (!this.id) {
      this.id = NewId();
    }
  }
  @Column('character varying', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'name' })
  name: string;

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

  @OneToMany(() => Products, (products) => products.brands)
  products: Products[];
}
