import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  step: number = 1;

  formRegister!: FormGroup;
  step1Form!: FormGroup;
  step2Form!: FormGroup;
  step3Form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.step1Form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      secondLastName: ['', Validators.required],
    });

    this.step2Form = this.fb.group({
      usename: ['', Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
    });

    this.step3Form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordRepeat: [''],
    });

    this.formRegister = this.fb.group({
      step1: this.step1Form,
      step2: this.step2Form,
      step3: this.step3Form,
    });
  }

  next() {
    if (this.step === 1 && this.step1Form.valid) {
      this.step++;
    } else if (this.step === 2 && this.step2Form.valid) {
      this.step++;
    } else if (this.step === 3 && this.step3Form.valid) {
      this.step++;
    }
  }

  prev() {
    if (this.step > 1) {
      this.step--;
    }
  }

  register(): void {
    alert('Proceso completado!');
  }
}
