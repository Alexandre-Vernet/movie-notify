import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "primeng/button";
import { DataViewModule } from "primeng/dataview";
import { TagModule } from "primeng/tag";
import { NgClass } from "@angular/common";
import { ToastModule } from "primeng/toast";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, DataViewModule, TagModule, NgClass, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
