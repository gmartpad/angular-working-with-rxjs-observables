import { Component, OnInit, inject, signal, effect, computed } from '@angular/core';
import { interval, map } from 'rxjs';
import { DestroyRef } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0)
  interval = signal(0)
  doubleInterval = computed(() => this.interval() * 2)
  private destroyRef = inject(DestroyRef)

  constructor() {
    effect(() => {
      console.log(this.clickCount())
    })
  }

  ngOnInit(): void {
    setInterval(() => {
      this.interval.update((prev) => prev + 1)
    }, 1000)

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
