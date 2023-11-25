import { IsNotEmpty } from "class-validator";

export class MahasiswaDto{
    @IsNotEmpty()
    nama: string;

    @IsNotEmpty()
    nim: number;

    @IsNotEmpty()
    jurusan: string;

    @IsNotEmpty()
    fakultas: string;

    @IsNotEmpty()
    aktif: string;
}