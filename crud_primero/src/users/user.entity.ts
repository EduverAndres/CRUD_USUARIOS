import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 20, nullable: true })
  phone?: string;

  @Column({ type: 'text', nullable: true })
  address?: string;

  @Column({ length: 100, nullable: true })
  job_title?: string;

  @Column({ length: 100, nullable: true })
  company?: string;

  @Column({ type: 'text', nullable: true })
  photo_url?: string;

  @CreateDateColumn()
  created_at: Date;
}