import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from "@ngx-translate/core";
import { BrowserModule } from '@angular/platform-browser';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const translateModuleConfig: TranslateModuleConfig = {
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
};



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
    withViewTransitions()),
    provideHttpClient(),
    provideToastr(),
    provideAnimations(),
    importProvidersFrom(
      BrowserModule,
      TranslateModule.forRoot(translateModuleConfig),
      BrowserAnimationsModule
    )
  
  ]
};
