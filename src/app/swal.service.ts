import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  AdvertenciaCamposObligatorios() {
    Swal.fire('Advertencia', 'Complete los campos obligatorios', 'warning');
    return;
  }

  Advertencia(mensaje: string) {
    const msj = mensaje ? mensaje : 'Siga las instrucciones';
    Swal.fire('Advertencia', msj, 'warning');
    return;
  }

  Error(mensaje?: string) {
    const msj = mensaje ? mensaje : 'Siga las instrucciones';
    Swal.fire('Error', msj, 'error');
    return;
  }
}
