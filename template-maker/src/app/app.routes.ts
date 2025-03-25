import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardBuilderComponent } from './pages/card-builder/card-builder.component';
import { ResumeBuilderComponent } from './pages/resume-builder/resume-builder.component';
import { TempletsComponent } from './pages/templets/templets.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'card-builder', component: CardBuilderComponent },
    { path: 'resume-builder', component: ResumeBuilderComponent },
    { path: 'templets', component: TempletsComponent }
];
