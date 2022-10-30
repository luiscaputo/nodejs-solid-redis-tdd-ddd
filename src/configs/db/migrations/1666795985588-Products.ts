import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Products1666795985588 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Products',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'code',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'imported_t',
            type: 'timestamp',
          },
          {
            name: 'url',
            type: 'varchar',
          },
          {
            name: 'creator',
            type: 'varchar',
          },
          {
            name: 'last_modified_at',
            type: 'timestamp',
          },
          {
            name: 'product_name',
            type: 'varchar',
          },
          {
            name: 'quantity',
            type: 'float',
          },
          {
            name: 'label',
            type: 'varchar',
          },
          {
            name: 'ingedients_text',
            type: 'varchar',
          },
          {
            name: 'traces',
            type: 'varchar',
          },
          {
            name: 'serving_size',
            type: 'float',
          },
          {
            name: 'serving_quantity',
            type: 'float',
          },
          {
            name: 'nutriscore_core',
            type: 'varchar',
          },
          {
            name: 'nutriscore_grade',
            type: 'varchar',
          },
          {
            name: 'main_category',
            type: 'varchar',
          },
          {
            name: 'image_url',
            type: 'varchar',
          },

          {
            name: 'Categories_id',
            type: 'varchar',
          },
          {
            name: 'brands_id',
            type: 'varchar',
          },
          {
            name: 'Stores_id',
            type: 'varchar',
          },
          {
            name: 'Cities_id',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'update_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKCategoriesProdut',
            referencedTableName: 'Categories',
            referencedColumnNames: ['id'],
            columnNames: ['Categories_id'],
            onDelete: 'SET DEFAULT',
            onUpdate: 'SET DEFAULT',
          },
          {
            name: 'FKbrandsProdut',
            referencedTableName: 'brands',
            referencedColumnNames: ['id'],
            columnNames: ['brands_id'],
            onDelete: 'SET DEFAULT',
            onUpdate: 'SET DEFAULT',
          },
          {
            name: 'FKStoresProdut',
            referencedTableName: 'Stores',
            referencedColumnNames: ['id'],
            columnNames: ['Stores_id'],
            onDelete: 'SET DEFAULT',
            onUpdate: 'SET DEFAULT',
          },
          {
            name: 'FKCitiesProdut',
            referencedTableName: 'Cities',
            referencedColumnNames: ['id'],
            columnNames: ['Cities_id'],
            onDelete: 'SET DEFAULT',
            onUpdate: 'SET DEFAULT',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Products');
  }
}
