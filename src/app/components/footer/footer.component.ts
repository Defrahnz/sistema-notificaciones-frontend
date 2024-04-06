import { Component,  HostListener,  OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number;
/*   isFooterVisible:boolean; */

  constructor(){
    this.currentYear = new Date().getFullYear();
    /* this.isFooterVisible=false; */
  }

  ngOnInit(): void {
   
  }
  /* @HostListener('window:scroll',['$event'])
  checkScroll(){
    const scrollPosition=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight=window.innerHeight;
    const bodyHeight=document.body.clientHeight;
    const footerHeight=document.querySelector('.footer')?.clientHeight || 0;
    if (scrollPosition >=bodyHeight -windowHeight-footerHeight){
      this.isFooterVisible=true;
    }else{
      this.isFooterVisible=false;
    }
  }
 */
}