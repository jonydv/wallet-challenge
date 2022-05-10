import Swal from "sweetalert2";

export const errorAlert = ( footer: string) => {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: footer
      });
}

export const successAlert = (title: string) => {

    Swal.fire({
        icon: 'success',
        title: title,
        showConfirmButton: false,
        timer: 1500
      });
}