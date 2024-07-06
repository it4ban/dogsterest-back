import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'integer',
    default: 0,
  })
  likeCount: number;

  @Column({ default: false })
  onFavourite: boolean;

  @Column({ type: 'text' })
  image: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;
}
