import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'movies', schema: 'public' })
export class Movie {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  status: string;

  @Column({ type: 'text' })
  image: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
