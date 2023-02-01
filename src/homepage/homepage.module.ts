import { Module } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { HomepageController } from './homepage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './entity/hero';
import { Bosuutap } from './entity/bosuutap';
import { Giasochomnay } from './entity/giasochomnay';
import { Thuonghieuchinhhang } from './entity/thuonghieuchinhhang';
import { Thuonghieusaletet } from './entity/thuonghieusaletet';

@Module({
  imports: [TypeOrmModule.forFeature([Hero,Bosuutap,Giasochomnay,Thuonghieuchinhhang,Thuonghieusaletet])],
  providers: [HomepageService],
  controllers: [HomepageController]
})
export class HomepageModule {}
