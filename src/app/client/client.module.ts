import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ClientComponent } from './client.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [
    ProfileComponent,
    SettingsComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
