import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() options: any[] = [];

  

  @Input() status: string = "";

  // Example method to change status
  changeStatus(newStatus: string) {
    this.status = newStatus;
  }

}
