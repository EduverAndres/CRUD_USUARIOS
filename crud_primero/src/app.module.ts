import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Reemplaza con tu host de la base de datos
      port: 3306, // Reemplaza con tu puerto de la base de datos
      username: 'root', // Reemplaza con tu usuario de la base de datos
      password: '', // Reemplaza con tu contraseña de la base de datos
      database: 'users', // Reemplaza con el nombre de tu base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ⚠️ Solo para desarrollo, no en producción
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}