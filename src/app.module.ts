import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type : "sqlite",
    database : ":memory:",
    entities : [User],
    synchronize : true
  })
    ,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
