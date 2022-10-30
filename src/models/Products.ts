import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as NewId } from 'uuid';

import { Brands } from './Brands';
import { Categories } from './Categories';
import { Cities } from './Cities';
import { Stores } from './Stores';

@Entity('Products', { schema: 'public' })
export class Products {
  constructor() {
    if (!this.id) {
      this.id = NewId();
    }
  }
  @Column('character varying', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'code' })
  code: string;

  @Column('character varying', { name: 'status' })
  status: string;

  @Column('timestamp without time zone', { name: 'imported_t' })
  importedT: Date;

  @Column('character varying', { name: 'url' })
  url: string;

  @Column('character varying', { name: 'creator' })
  creator: string;

  @Column('timestamp without time zone', { name: 'last_modified_at' })
  lastModifiedAt: Date;

  @Column('character varying', { name: 'product_name' })
  productName: string;

  @Column('double precision', { name: 'quantity', precision: 53 })
  quantity: number;

  @Column('character varying', { name: 'label' })
  label: string;

  @Column('character varying', { name: 'ingedients_text' })
  ingedientsText: string;

  @Column('character varying', { name: 'traces' })
  traces: string;

  @Column('double precision', { name: 'serving_size', precision: 53 })
  servingSize: number;

  @Column('double precision', { name: 'serving_quantity', precision: 53 })
  servingQuantity: number;

  @Column('character varying', { name: 'nutriscore_core' })
  nutriscoreCore: string;

  @Column('character varying', { name: 'nutriscore_grade' })
  nutriscoreGrade: string;

  @Column('character varying', { name: 'main_category' })
  mainCategory: string;

  @Column('character varying', { name: 'image_url' })
  imageUrl: string;

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

  @ManyToOne(() => Categories, (categories) => categories.products, {
    onDelete: 'SET DEFAULT',
    onUpdate: 'SET DEFAULT',
  })
  @JoinColumn([{ name: 'Categories_id', referencedColumnName: 'id' }])
  categories: Categories;

  @ManyToOne(() => Cities, (cities) => cities.products, {
    onDelete: 'SET DEFAULT',
    onUpdate: 'SET DEFAULT',
  })
  @JoinColumn([{ name: 'Cities_id', referencedColumnName: 'id' }])
  cities: Cities;

  @ManyToOne(() => Stores, (stores) => stores.products, {
    onDelete: 'SET DEFAULT',
    onUpdate: 'SET DEFAULT',
  })
  @JoinColumn([{ name: 'Stores_id', referencedColumnName: 'id' }])
  stores: Stores;

  @ManyToOne(() => Brands, (brands) => brands.products, {
    onDelete: 'SET DEFAULT',
    onUpdate: 'SET DEFAULT',
  })
  @JoinColumn([{ name: 'brands_id', referencedColumnName: 'id' }])
  brands: Brands;
}
