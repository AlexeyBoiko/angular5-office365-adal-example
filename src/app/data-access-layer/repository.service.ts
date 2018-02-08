import { Injectable } from '@angular/core';
import { AdalService } from '../data-access-layer/adal.service'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RepositoryService {

  constructor(private adalSrv:AdalService) { }

  messagesList():Observable<any>{
    return this.adalSrv.get(this.adalSrv.config.endpoints.graphApiUri, `${this.adalSrv.config.endpoints.graphApiUri}/v1.0/me/messages`);
  }
}
