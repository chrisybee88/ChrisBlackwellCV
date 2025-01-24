import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], // Fix typo: changed styleUrl to styleUrls
})
export class DashboardComponent implements OnInit {
  paramValue: string | null = '';
  private readonly accessCode: string;

  constructor(private route: ActivatedRoute) {
    const awesome = "Security";
    const fun = "Rox";
    const currentYear = new Date().getFullYear();
    this.accessCode = awesome + fun + currentYear.toString();
  }

  ngOnInit(): void {
    console.log(
      "%c Checkout the source code of Chris Blackwell's CV !!",
      'font-weight: bold; font-size: 50px; color: red; text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8), 12px 12px 0 rgb(5,148,68), 15px 15px 0 rgb(2,135,206), 18px 18px 0 rgb(4,77,145), 21px 21px 0 rgb(42,21,113)'
    );
    console.log("src/app/dashboard/dashboard.component.ts")

    this.route.queryParamMap.subscribe((params) => {
      this.paramValue = params.get('Key');
      //console.log('Query params:', params.keys); // Debugging all keys

      if (this.paramValue === this.accessCode) {
        this.showContent();
      } else {
        //this.promptForAccessCode();
      }
    });
  }

  private showContent(): void {
    const contentElement = document.querySelector('.doc2') as HTMLElement;
    if (contentElement) {
      contentElement.style.display = 'block';
    }
  }

  private promptForAccessCode(): void {
    const code = prompt('Please enter your share code:');
    if (code === this.accessCode) {
      this.showContent();
    } else {
      alert('View console output for error details');
    }
  }
}
