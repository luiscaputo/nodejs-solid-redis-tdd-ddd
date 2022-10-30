import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { v4 as NewId } from 'uuid';

import { Products } from './Products';
import { PurchasePlaces } from './PurchasePlaces';

@Entity('Cities', { schema: 'public' })
export class Cities {
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

  @ManyToOne(() => PurchasePlaces, (purchasePlaces) => purchasePlaces.cities, {
    onDelete: 'SET DEFAULT',
    onUpdate: 'SET DEFAULT',
  })
  @JoinColumn([{ name: 'PurchasePlaces_id', referencedColumnName: 'id' }])
  purchasePlaces: PurchasePlaces;

  @OneToMany(() => Products, (products) => products.cities)
  products: Products[];
}
