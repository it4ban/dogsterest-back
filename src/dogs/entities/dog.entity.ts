import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'integer',
    default: 0,
  })
  likeCounter: number;

  @Column({ default: false })
  onFavourite: boolean;

  @Column('text')
  image: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  constructor(dog: Partial<Dog>) {
    Object.assign(this, dog);
  }
}
