import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from 'src/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  const config = new ConfigService();
  const port = await config.getPortConfig();

  await app.listen(process.env.PORT || port);

  return app;
}

if (require.main === module) {
  bootstrap();
}
