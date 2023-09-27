import { Module } from '@nestjs/common';
import { datasourceProviders } from './datasource.providers';
import { repositoryProviders } from './repository.providers';

@Module({
  providers: [...datasourceProviders, ...repositoryProviders],
  exports: [...datasourceProviders, ...repositoryProviders],
})
export class DatabaseModule {}
