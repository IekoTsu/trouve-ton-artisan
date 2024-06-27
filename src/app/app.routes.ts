import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanPageComponent } from './pages/artisan-page/artisan-page.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full' },
    { path:'home', component: HomeComponent },
    { path:'artisan/:id', component: ArtisanPageComponent },
    { path:'result', component: SearchResultComponent },
    { path:'result/:category', component: SearchResultComponent },
    { path:'result/:search', component: SearchResultComponent }
];
 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}