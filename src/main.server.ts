/**
 * Created by Даниил on 18.03.2018.
 */
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
    enableProdMode();
}

export {AppServerModule} from './app/app.server.module';