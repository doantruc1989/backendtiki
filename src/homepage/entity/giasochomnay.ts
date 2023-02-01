import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';


@Entity('giasochomnay')
export class Giasochomnay {

    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;

    @Column('varchar', { name: 'category', length: 75, nullable: true  })
    name: string;

    @Column('varchar')
    image: string;

    @Column('varchar')
    path: string;

    @Column('bigint', {default: () => "'0'"} )
    parentId: number;
}
