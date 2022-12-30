import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/routes/http.module';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { NotificationsController } from './infra/routes/controllers/notifications.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
