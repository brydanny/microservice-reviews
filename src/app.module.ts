import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedKernelModule } from './shared-kernel/shared-kernel.module';
import { ReviewsModule } from './reviews/reviews.module';
@Module({
  imports: [SharedKernelModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
