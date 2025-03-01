import { Component, OnInit, inject } from '@angular/core';
import { interval, map } from 'rxjs';
import { DestroyRef } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef)

  ngOnInit(): void {
    const subscription = interval(1000)
      .pipe(
        map((val) => val * 2)
      )
      .subscribe({
        next: (val) => console.log(val)
      })

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe()
    })
  }
}
