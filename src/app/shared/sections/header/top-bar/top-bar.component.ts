import { Component } from '@angular/core';
import { LogoComponent } from '../../../components/logo/logo.component';
import { AppInlinePaddingDirective } from '../../../directives/app-padding/app-padding.directive';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [LogoComponent, AppInlinePaddingDirective, MatButtonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  links = ["Home", "About", "Services", "Pricing", "Contact"]

}
