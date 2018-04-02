import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss']
})
export class MsgComponent implements OnInit {

  msg = [
     ' <div class="row msg_container base_sent"><div class="col-md-10 col-xs-10"><div class="messages msg_sent"><p>that mongodb thing looks good, huh? tiny master db, and huge document store</p><time datetime="2009-11-13T20:00">Timothy • 51 min</ti </div></div><div class="col-md-2 col-xs-2 avatar"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive "></div></div>',
     ' <div class="row msg_container base_sent"><div class="col-md-10 col-xs-10"><div class="messages msg_sent"><p>that mongodb thing looks good, huh? tiny master db, and huge document store</p><time datetime="2009-11-13T20:00">Timothy • 51 min</ti </div></div><div class="col-md-2 col-xs-2 avatar"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive "></div></div>',
     ' <div class="row msg_container base_sent"><div class="col-md-10 col-xs-10"><div class="messages msg_sent"><p>that mongodb thing looks good, huh? tiny master db, and huge document store</p><time datetime="2009-11-13T20:00">Timothy • 51 min</ti </div></div><div class="col-md-2 col-xs-2 avatar"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive "></div></div>',
     ' <div class="row msg_container base_sent"><div class="col-md-10 col-xs-10"><div class="messages msg_sent"><p>that mongodb thing looks good, huh? tiny master db, and huge document store</p><time datetime="2009-11-13T20:00">Timothy • 51 min</ti </div></div><div class="col-md-2 col-xs-2 avatar"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive "></div></div>'
  ];
  constructor() { }

  ngOnInit() {
  }

  getMsg (){
  	  return this.msg;
  }
}
