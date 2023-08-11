/*
 * ---------------------------------------------
 * Author: Jay Christopher A Anacio
 * Date:   Saturday August 12th 2023
 * Last Modified by: Jay Christopher A Anacio - <jcaanacio@gmail.com>
 * Last Modified time: August 12th 2023, 3:41:50 am
 * ---------------------------------------------
 */

import { InjectionToken } from '@angular/core';
import { RestAuthService } from 'src/app/services/data-providers/RestAuthService';

export const REST_AUTH_SERVICE_TOKEN = new InjectionToken<RestAuthService>(
  'RestAuthService'
);
