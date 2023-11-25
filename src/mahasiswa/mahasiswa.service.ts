import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mahasiswa } from './mahasiswa.entity';
import { Repository } from 'typeorm';
import { MahasiswaDto } from './mahasiswa.dto';

@Injectable()
export class MahasiswaService {
    constructor(
        @InjectRepository(Mahasiswa)
        private mhs: Repository<Mahasiswa>
    ){}
    async getAll(){
        return await this.mhs.find()
    }

    async insertData(data: MahasiswaDto){
        const datamhs = await this.mhs.create(data)
        await this.mhs.save(datamhs)
        return datamhs;
    }

    async updateData(id: string, data: Partial<MahasiswaDto>){
        await this.mhs.update(id, data);
        return await this.mhs.findOne({where: {id}})
    }

    async deleteData(id: string){
        if (id === null) {
            return 'Data tidak ada'
        }
        await this.mhs.delete(id)
        return {delete: true}
    }
}
