import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

const MaterialComponent = [
                            MatButtonModule,
                            MatCardModule,       
                            MatFormFieldModule,
                            MatInputModule
                            
                          ];

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
