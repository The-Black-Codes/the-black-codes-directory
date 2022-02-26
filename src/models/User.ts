import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  id!: number;
  @Column({ unique: true, name: "email_address" })
  emailAddress!: string;
  @Column({})
  name!: string;
  @Column({ nullable: true })
  profileImageURL!: string;
  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
