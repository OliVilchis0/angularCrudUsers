import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ImageModule } from 'primeng/image';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

import { CardComponent } from './components/card/card.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    CardComponent,
    ConfirmDialogComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SideBarComponent,
    UserPageComponent,
  ],
  imports: [
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    CommonModule,
    DividerModule,
    DynamicDialogModule,
    ImageModule,
    InputTextareaModule,
    InputTextModule,
    MessagesModule,
    ReactiveFormsModule,
    ScrollPanelModule,
    SidebarModule,
    SplitButtonModule,
    ToastModule,
    ToolbarModule,
    UserRoutingModule,
  ]
})
export class UsersModule { }
