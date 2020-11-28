import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment }  from '../environments/environment'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { ClienteNuevoService } from './service/cliente-nuevo.service'

import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { NewformComponent } from './newform/newform.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: 'listar', component:ListarComponent  }
]
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NewformComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),

    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    ClienteNuevoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
