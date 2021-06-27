import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-board-dialog",
  template: `
    <h1 mat-dialog-title>Board</h1>
    <div matDialogContent>
      <p>Como devemos chamar esse board?</p>
      <mat-form-field>
        <input placeholder="Titulo" matInput [(ngModel)]="data.title" />
      </mat-form-field>
    </div>
    <div matDialogActions>
      <button mat-button (click)="onNoClick()">Cancelar</button>
      <button mat-button [mat-dialog-close]="data.title" cdkFocusInitial>
       Criar 
      </button>
    </div>
  `,
  styles: []
})
export class BoardDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
