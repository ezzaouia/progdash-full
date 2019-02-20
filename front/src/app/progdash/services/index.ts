import { TraceService } from './trace.service';
import { UserService } from './user.service';
import { ProgdashDataService } from './progdash-data.service';

export const fromSerices = [
  ProgdashDataService,
  TraceService,
  UserService,
];

export * from './user.service';
export * from './progdash-data.service';
export * from './trace.service';
