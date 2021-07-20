import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserEntity1626642837357 implements MigrationInterface {
    name = 'AddUserEntity1626642837357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."users" ("id" SERIAL NOT NULL, "user_login" character varying NOT NULL, "user_password" character varying NOT NULL, CONSTRAINT "PK_a6cc71bedf15a41a5f5ee8aea97" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."tasks" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."tasks_status_enum" AS ENUM('active', 'solved', 'pending', 'on_hold')`);
        await queryRunner.query(`ALTER TABLE "public"."tasks" ADD "status" "public"."tasks_status_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."tasks" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."tasks_status_enum"`);
        await queryRunner.query(`ALTER TABLE "public"."tasks" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "public"."users"`);
    }

}
