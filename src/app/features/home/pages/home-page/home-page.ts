import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../../../components/hero/hero';
import { Api, Country } from '../../../../services/api';
import { inject } from '@angular/core/primitives/di';
import { rxResource } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-home-page',
  imports: [Hero],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage  {
  private apiService = inject(Api);
  countriesResource = rxResource({
    stream: () => this.apiService.getItems(),
  });


  
}
