import { TypeOrmModuleOptions } from "@nestjs/typeorm";
// import { ConfigModule } from '@nestjs/config';

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'Alswl9811!',
    database: 'hypercloud',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,

    // type: 'mysql',
    // host: process.env.DATABASE_HOST, //'localhost',
    // port: 3306,
    // username: process.env.DATABASE_USERNAME, //'root',
    // password: process.env.DATABASE_PASSWORD, //'test',
    // database: 'hypercloud',
    // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    // synchronize: true, // true,
}