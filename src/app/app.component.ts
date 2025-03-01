import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { interval, map } from 'rxjs';
import { DestroyRef } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0)
  private destroyRef = inject(DestroyRef)

  constructor() {
    effect(() => {
      console.log(this.clickCount())
    })
  }

  ngOnInit(): void {
    // const subscription = interval(1000)
    //   .pipe(
    //     map((val) => val * 2)
    //   )
    //   .subscribe({
    //     next: (val) => console.log(val)
    //   })

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe()
    // })
  }

  onClick() {
    this.clickCount.update((prev) => prev + 1)
  }
}
