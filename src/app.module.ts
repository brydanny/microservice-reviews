import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedKernelModule } from './shared-kernel/shared-kernel.module';
import { ReviewsModule } from './reviews/reviews.module';
import { MongooseConfigModule } from './reviews/infrastructure/mongoose/mongoose.module';

import config from './reviews/infrastructure/config';
import { environments } from './environments';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    SharedKernelModule,
    ReviewsModule,
    MongooseConfigModule,
  ],
})
export class AppModule {}
