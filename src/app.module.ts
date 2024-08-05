import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesModule } from './jokes/jokes.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './app.config'; // Import the configuration function
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the configuration available globally
      envFilePath: '.env', // Specify the path to the .env file
      load: [appConfig], // Load the configuration file
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongoDbUri'),
      }),
      inject: [ConfigService],
    }),
    JokesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
