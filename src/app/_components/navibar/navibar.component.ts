import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-navibar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navibar.component.html',
  styleUrl: './navibar.component.css'
})
export class NavibarComponent implements OnInit {
  ngOnInit(): void {
    // Initialize all dropdowns
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
    dropdownElementList.forEach((dropdownToggleEl) => {
      new bootstrap.Dropdown(dropdownToggleEl);
    });
  }
}
