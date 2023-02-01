import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HomepageService } from './homepage.service';

@Controller('homepage')
@ApiTags('homepage')
export class HomepageController {
    constructor(private homepageService: HomepageService) { }

    @Get('hero')
    async getHero() {
        return this.homepageService.listHero()
    }

    @Get('chinhhang')
    async getThuonghieuchinhhang() {
        return this.homepageService.listThuonghieuchinhhang()
    }

    @Get('giasochomnay')
    async getGiasochomnay() {
        return this.homepageService.listGiasochomnay()
    }

    @Get('saletet')
    async getSaletet() {
        return this.homepageService.listSaletet()
    }

    @Get('bosuutap')
    async getBosuutap() {
        return this.homepageService.listBosuutap()
    }
}
