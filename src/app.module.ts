import { Module } from '@nestjs/common';
import { TypedConfigModule } from './typed-config';

@Module({
  imports: [TypedConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
