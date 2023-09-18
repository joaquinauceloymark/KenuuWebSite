import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  Advertencia() {
    Swal.fire('Advertencia', 'Complete los campos obligatorios', 'warning');
    return;
  }
}
