import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mahasiswa{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({length: 255})
    nama: string;

    @Column()
    nim: number;

    @Column()
    jurusan: string;

    @Column()
    fakultas: string;

    @Column()
    aktif: string;

}