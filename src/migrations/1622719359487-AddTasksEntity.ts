import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTasksEntity1622719359487 implements MigrationInterface {
    name = 'AddTasksEntity1622719359487'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."tasks" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "task_name" character varying NOT NULL, "start_date" TIMESTAMP NOT NULL, "finish_date" TIMESTAMP NOT NULL, CONSTRAINT "PK_a3fd66e4ad9f63bd665f26e3741" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "public"."tasks"`);
    }

}
