import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-base-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <!-- Will loop over config file items to get form elements-->

      <!-- Additional form fields (e.g., for signup form) -->
      <ng-content></ng-content>
      <button type="submit">Submit</button>
    </form>
  `,
})
export class BaseFormComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {}
}
