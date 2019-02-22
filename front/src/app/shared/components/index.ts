import { RootComponent } from './root';
import { ContainerComponent } from './container';
import { NavbarComponent } from './navbar';
import { HomeViewComponent } from './homeView';
import { NotFoundComponent } from './notfound';
import { ErrorComponent } from './error';
import { Modal } from './modal';
import { PrintWidgetComponent } from './printWidget';
import { HomePageComponent } from '../containers';
import { FormatTimePipe, ValuesPipe } from '../pipes';
import { SnackNotifyComponent } from "./snackNotify";

export const fromComponents: any[] = [
  RootComponent,
  HomePageComponent,
  ContainerComponent,
  NavbarComponent,
  HomeViewComponent,
  NotFoundComponent,
  ErrorComponent,
  Modal,
  PrintWidgetComponent,
  SnackNotifyComponent,

  FormatTimePipe,
  ValuesPipe,
];

export const fromEntryComponents: any[] = [
  Modal, PrintWidgetComponent, SnackNotifyComponent
];

export * from './root';
export * from './notfound';
export * from './error';
export * from './modal';
export * from './printWidget';
export * from '../containers';

