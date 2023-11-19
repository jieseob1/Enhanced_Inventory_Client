import { lazy as baseLazy } from 'react';

const lazy = (module: string) => baseLazy(() => import(`../${module}`));

const lazyRoute = (name: string) => lazy(`routes/${name}`);

const lazyComponent = (name: string) => lazy(`components/${name}`);

export {
  lazy,
  lazyRoute,
  lazyComponent,
};
