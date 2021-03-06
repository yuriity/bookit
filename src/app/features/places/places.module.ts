import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesPage } from './places.page';
import { TabbedPlacesPage } from './tabbed-places.page';

@NgModule({
  imports: [SharedModule, PlacesRoutingModule],
  declarations: [PlacesPage, TabbedPlacesPage]
})
export class PlacesPageModule {}
