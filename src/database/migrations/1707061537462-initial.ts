import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1707061537462 implements MigrationInterface {
    name = 'Initial1707061537462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "weather" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "lat" integer NOT NULL, "lon" integer NOT NULL, "part" character varying NOT NULL DEFAULT 'current', "data" json NOT NULL, CONSTRAINT "PK_af9937471586e6798a5e4865f2d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "weather"`);
    }

}
