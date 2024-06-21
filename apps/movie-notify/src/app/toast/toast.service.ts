import { Injectable } from '@angular/core';
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private messageService: MessageService,
  ) {
  }

  showSuccess(message: string, detail?: string) {
    this.messageService.add({severity: 'success', summary: message, detail});
  }

  showError(message: string, detail?: string) {
    this.messageService.add({severity: 'error', summary: message, detail});
  }
}
