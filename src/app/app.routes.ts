import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyComponent } from './main-content/privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'privacy', component: PrivacyComponent },
];
