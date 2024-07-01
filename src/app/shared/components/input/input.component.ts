import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() placeholder: string = 'Escriba la palabra y buscar...';
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
}
