import { ProgdashViewComponent } from './progdashView';
import { ProgdashManagerComponent } from './progdashManager';
import { ProgBoardComponent } from './progBoard';
import { InfoWidgetComponent } from './infoWidget';
import { TopNRulesWidgetComponent } from './topNRulesWidget';
import { TopNUsersWidgetComponent } from './topNUsersWidget';
import { TimelineWidgetComponent } from './timelineWidget';
import { TimescaleMenuComponent } from './timescaleMenu';
import { DeltaWidgetComponent } from './deltaWidget';
import { UserLisrComponent } from './userList';
import { ClassNameMenuComponent } from './classNameMenu';
import { MoreMenuComponent } from './moreMenu';
import { UserDetailComponent } from './userDetail';
import { ClassManagerComponent } from './classManager';
import { ProgTableComponent } from './progTable';
import { UserTimelineWidgetComponent } from './userTimelineWidget';
import { PrintWidgetComponent } from './printWidget';
import { ProgdashViewPageComponent } from '../containers';
import { FormatAttrPipe } from '../pipes';

export const fromComponents: any[] = [
  ProgdashViewComponent,
  ProgdashManagerComponent,
  ProgBoardComponent,
  InfoWidgetComponent,
  TimelineWidgetComponent,
  TimescaleMenuComponent,
  DeltaWidgetComponent,
  UserLisrComponent,
  UserDetailComponent,
  ClassManagerComponent,
  ClassNameMenuComponent,
  MoreMenuComponent,
  ProgTableComponent,
  TopNRulesWidgetComponent,
  TopNUsersWidgetComponent,
  UserTimelineWidgetComponent,
  FormatAttrPipe,
  ProgdashViewPageComponent,
  // PrintWidgetComponent,
];

export const fromEntryComponents: any[] = [
  InfoWidgetComponent,
  UserDetailComponent,
  ClassManagerComponent,
  TimelineWidgetComponent,
  TopNRulesWidgetComponent,
  TopNUsersWidgetComponent,
  UserTimelineWidgetComponent,
];

export * from './classManager';
export * from './userDetail';
export * from './infoWidget';
export * from './timelineWidget';
export * from './topNRulesWidget';
export * from './topNUsersWidget';
