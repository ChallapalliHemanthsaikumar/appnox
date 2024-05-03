import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropdownComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showServicesDropdown = false;
  showIndustriesDropdown = false;
  showSolutionsDropdown = false;
  showDeveloperDropdown = false;
  showCompanyDropdown = false;
  showWorkDropdown = false;
  // Add similar properties for other dropdowns
  services = 'services';
  solutions = 'solutions';
  industries = 'industries';
  work = 'work';
  company = 'company';
  developers = 'developers';


  





  // Define dropdown options for each menu item
  servicesOptions = [
      { label: 'Full-cycle Product Development' },
      { label: 'Application Development'},
      { label: 'Software Development' },
      { label: 'Customer Experience and Design' },
      { label: 'Quality Engineering'},
      { label: 'Digital Marketing' },
     
      // Add more options as needed
  ];

  industriesOptions = [
      { label: 'Industry 1', link: '/industry1' },
      { label: 'Industry 2', link: '/industry2' },
      // Add more options as needed
  ];

  solutionsOptions = [
      { label: 'Solution 1', link: '/solution1' },
      { label: 'Solution 2', link: '/solution2' },
      // Add more options as needed
  ];

  developerOptions = [
    { label: 'Solution 1', link: '/solution1' },
    { label: 'Solution 2', link: '/solution2' },

  ]
  workOptions = [
    { label: 'Solution 1', link: '/solution1' },
    { label: 'Solution 2', link: '/solution2' },

  ]

  companyOptions = [
    { label: 'Solution 1', link: '/solution1' },
    { label: 'Solution 2', link: '/solution2' },
  ]

  // Define similar data for other menu items

  showDropdown(menuItem: string) {
      // Hide all dropdowns
      this.showServicesDropdown = false;
      this.showIndustriesDropdown = false;
      this.showSolutionsDropdown = false;
      this.showDeveloperDropdown = false;
      this.showCompanyDropdown = false;
      this.showWorkDropdown = false;
      // Add similar lines for other dropdowns

      // Show the corresponding dropdown
      if (menuItem === 'services') {
          this.showServicesDropdown = true;
      } else if (menuItem === 'industries') {
          this.showIndustriesDropdown = true;
      } else if (menuItem === 'solutions') {
          this.showSolutionsDropdown = true;
      } else if(menuItem === 'work'){
        this.showWorkDropdown = true;
      } else if(menuItem === 'company') {
        this.showCompanyDropdown = true;
      } else if(menuItem === 'developer') {
        this.showDeveloperDropdown = true;
      }
      // Add similar conditions for other menu items
  }

  hideDropdown(menuItem: string) {
      // Hide all dropdowns when the mouse leaves a menu item
      this.showServicesDropdown = false;
      this.showIndustriesDropdown = false;
      this.showSolutionsDropdown = false;
      this.showDeveloperDropdown = false;
      this.showCompanyDropdown = false;
      this.showWorkDropdown = false;


      if (menuItem === 'services') {
        this.showServicesDropdown = true;
    } else if (menuItem === 'industries') {
        this.showIndustriesDropdown = true;
    } else if (menuItem === 'solutions') {
        this.showSolutionsDropdown = true;
    } else if(menuItem === 'work'){
      this.showWorkDropdown = true;
    } else if(menuItem === 'company') {
      this.showCompanyDropdown = true;
    } else if(menuItem === 'developer') {
      this.showDeveloperDropdown = true;
    }
      // Add similar lines for other dropdowns
  }

  hideDropDown1(){

    this.showServicesDropdown = false;
    this.showIndustriesDropdown = false;
    this.showSolutionsDropdown = false;
    this.showDeveloperDropdown = false;
    this.showCompanyDropdown = false;
    this.showWorkDropdown = false;

  }

}
