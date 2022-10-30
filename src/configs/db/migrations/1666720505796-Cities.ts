import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Cities1666720505796 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Cities',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'PurchasePlaces_id',
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
            name: 'FKPurchasePlacesCities',
            referencedTableName: 'PurchasePlaces',
            referencedColumnNames: ['id'],
            columnNames: ['PurchasePlaces_id'],
            onDelete: 'SET DEFAULT',
            onUpdate: 'SET DEFAULT',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Cities');
  }
}
