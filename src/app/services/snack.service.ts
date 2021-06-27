import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  authError() {
    this.snackBar.open("Voce precisa estar logado!", "OK", {
      duration: 5000
    });

    return this.snackBar._openedSnackBarRef
      .onAction()
      .pipe(tap(_ => this.router.navigate(["/login"])))
      .subscribe();
  }
}
