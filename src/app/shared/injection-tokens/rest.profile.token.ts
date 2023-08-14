
import { InjectionToken } from '@angular/core';
import { RestProfileService } from 'src/app/services/data-providers/RestProfileService';

export const REST_PROFILE_SERVICE_TOKEN = new InjectionToken<RestProfileService>(
  'RestProfileService'
);

