import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ApiKey1666798781133 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ApiKey',
        columns: [
          {
            name: 'key',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ApiKey');
  }
}
