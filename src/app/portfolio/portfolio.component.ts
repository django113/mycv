import {Component, OnInit, ViewChild} from '@angular/core';
import {PorfolioService} from "../services/porfolio.service";
import {Contact} from "../contact";
import {ToastrService} from "ngx-toastr";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  contact: Contact = new Contact();
  @ViewChild('contactForm') contactForm: NgForm | undefined; // Reference to the form
  showSuccessMessage = false;
  showErrorMessage = false;
  successMessage = '';
  errorMessage = '';


  logoWidth = 800; // Set the desired width of the logo in pixels
  logoHeight =600; // Set the desired height of the logo in pixels
  padding =-5; // Set the desired height of the logo in pixels
  logoBorderRadius = 5; // Se
  userSkills: any[] | undefined;
  experience: any[] | undefined;
  projects: any[] | undefined;
  total_data:any;
  project_data:any;
  downloadUrl: string='';
  constructor(private userService: PorfolioService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      console.log('data',data.image)
      this.total_data=data;
      this.userSkills = data[0].categories;// Assuming the API response is an array with a single user object
      this.experience = data[0].experience;// Assuming the API response is an array with a single user object
      this.projects = data[0].projects;// Assuming the API response is an array with a single user object
    });
  }


  getProduct(id:any){
    this.userService.getProjectDetail(id).subscribe(data=>{
      console.log("data detail",data)
      this.project_data=data;
    })
  }
 getDownloadResume() {
    this.userService.getResumeDownload().subscribe(
      (data: Blob) => {
        this.downloadUrl = URL.createObjectURL(data);
        window.open(this.downloadUrl, '_blank'); // Open the PDF in a new window or tab
      },
      error => {
        console.error('Error downloading resume:', error);
      }
    );
  }


 onSubmit() {
    // Call your service to send contact information and handle response
    this.userService.sendContactInfo(this.contact).subscribe(
      response => {
        // Handle success response
        this.showSuccessMessage = true;
        this.successMessage = 'Contact information sent successfully';
        this.toastr.success('Contact information sent successfully', 'Success', { timeOut: 3000 });
        setTimeout(() => {
          this.showSuccessMessage = false; // Hide success message after 3 seconds
        }, 3000);
        this.contactForm?.resetForm(); // Reset form fields
      },
      error => {
        // Handle error response
        this.showErrorMessage = true;
        this.errorMessage = 'Failed to send contact information';
        this.toastr.error('Failed to send contact information', 'Error', { timeOut: 3000 });
        setTimeout(() => {
          this.showErrorMessage = false; // Hide error message after 3 seconds
        }, 3000);
        console.error('Failed to send contact information', error);
      }
    );
  }

}
