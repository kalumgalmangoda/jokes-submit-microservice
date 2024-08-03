import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesModule } from './jokes/jokes.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './app.config'; // Import the configuration function
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the configuration available globally
      envFilePath: '.env', // Specify the path to the .env file
      load: [appConfig], // Load the configuration file
    }),
    MongooseModule.forRoot(
      'mongodb+srv://kalum:7U3DjJP1SWJoZfPV@dev.wcm4dwa.mongodb.net/jokes-dev?retryWrites=true&w=majority&appName=dev',
    ), // Replace with your MongoDB URI
    JokesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
