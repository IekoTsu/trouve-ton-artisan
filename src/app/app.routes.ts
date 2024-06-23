import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanPageComponent } from './pages/artisan-page/artisan-page.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

export const routes: Routes = [
    { path: '', redirectTo:'artisan', pathMatch:'full' },
    { path:'home', component: HomeComponent },
    { path:'artisan', component: ArtisanPageComponent },
    { path:'result', component: SearchResultComponent }
];
