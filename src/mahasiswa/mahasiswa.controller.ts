import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { MahasiswaDto } from './mahasiswa.dto';

@Controller('mahasiswa')
export class MahasiswaController {
    constructor(private mhsService: MahasiswaService) {
        
    }
    @Get()
    async getMahasiswa(){
        return await this.mhsService.getAll()
    }

    @Post()
    async insertMhs(@Body() data: MahasiswaDto){
        return await this.mhsService.insertData(data)
    }

    @Post('update/:id')
    async updateMhs(@Param('id') id: string, @Body() data: Partial<MahasiswaDto>){
        return await this.mhsService.updateData(id, data);
    }

    @Delete('delete/:id')
    async deleteMhs(@Param('id') id: string){
        return await this.mhsService.deleteData(id)
    }
}
