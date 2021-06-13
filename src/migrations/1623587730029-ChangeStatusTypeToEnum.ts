import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeStatusTypeToEnum1623587730029 implements MigrationInterface {
    name = 'ChangeStatusTypeToEnum1623587730029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."tasks" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."tasks_status_enum" AS ENUM('active', 'completed')`);
        await queryRunner.query(`ALTER TABLE "public"."tasks" ADD "status" "public"."tasks_status_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."tasks" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."tasks_status_enum"`);
        await queryRunner.query(`ALTER TABLE "public"."tasks" ADD "status" character varying NOT NULL`);
    }

}
