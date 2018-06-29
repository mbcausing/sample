import { Component } from '@angular/core';

import * as io from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public socket;

    constructor(){}

    connect(txt: HTMLInputElement){
        let t = txt.value.toString().trim();
        this.socket = io(`http://192.168.1.215:3000/`, {
            reconnect: true,
            transports : ['polling', 'websocket'],
            query: {
                token: t
            }
        });

        this.socket.on('newMessage', data => {
            console.log(data)
        })

        this.socket.on('messageTyping', data => {
            console.log(data)
        })

        this.socket.on('error', data => {
            console.log('err')
        })
    }

}
