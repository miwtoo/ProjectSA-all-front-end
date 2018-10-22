import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { TestUiComponent } from './test-ui/test-ui.component';
import { AllComponent } from './all/all.component';
import { UserService } from './service/user/user.service';
//Miw
import { AddItemComponent } from './warehouse/add-item/add-item.component';
import { TakeItemComponent } from './warehouse/take-item/take-item.component';
import { ItemListComponent } from './warehouse/item-list/item-list.component';
import { HistoryComponent } from './warehouse/history/history.component';
//Ouu
import { HRComponent } from './personnel/hr/hr.component';
import { DepartmentComponent } from './personnel/department/department.component';
import { ManageComponent } from './personnel/manage/manage.component';
import { RecordComponent } from './personnel/record/record.component';

import { CustomerComponent } from './customer/customer.component';
import { RegisterService } from './service/register/register.service';

import { InformComponent } from './inform/informs/inform.component';
import { TableComponent } from './inform/table/table.component';
import { DatarecComponent } from './medicine/datarec/datarec.component';

const appRoutes: Routes = [
  {path: "" , component: LoginComponent},
  {path: "login" , component: LoginComponent},
  { path: 'all', component: AllComponent, children: [
    {path: "test" , component: TestUiComponent},

    { path: "add-item" , component: AddItemComponent },
    { path: "item-list" , component: ItemListComponent },
    { path: "take-item" , component: TakeItemComponent },
    { path: "history" , component: HistoryComponent },

    {path: 'hr', component : HRComponent},
    {path: 'manage', component : ManageComponent},
    {path: 'record', component : RecordComponent},
    {path: 'department', component : DepartmentComponent},

    {path: 'customer', component : CustomerComponent},

    { path: 'inform', component: InformComponent },
    { path: 'table', component: TableComponent },

    { path: 'medicine', component: DatarecComponent }
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    TestUiComponent,
    AllComponent,
    AddItemComponent,
    ItemListComponent,
    TakeItemComponent,
    HistoryComponent,
    HRComponent,
    DepartmentComponent,
    ManageComponent,
    RecordComponent,
    CustomerComponent,
    InformComponent,
    TableComponent,
    DatarecComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
