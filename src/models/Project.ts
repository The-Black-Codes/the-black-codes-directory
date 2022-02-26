import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "projects" })
export class Project {
  @PrimaryGeneratedColumn({ name: "project_id" })
  id!: number;
  @Column()
  title!: string;
  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
  @UpdateDateColumn({ name: "updated_at" })
  updateAt!: Date;
}
