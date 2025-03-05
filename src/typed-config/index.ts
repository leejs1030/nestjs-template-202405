// typed-config.ts
import { createTypedConfig } from 'nestjs-typed-config';
import * as Joi from 'joi';

export const { TypedConfigService, TypedConfigModule } = createTypedConfig({
  DATABASE_URL: Joi.string().required(),
  SERVER_PORT: Joi.number().required(),
});

export type TypedConfigService = InstanceType<typeof TypedConfigService>; // must declare this!
