import { Component, OnInit } from '@angular/core';

import { LocalService } from './../../services/local.service';
import { GlobalService } from './../../services/global.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  providers: [LocalService]
})
export class OneComponent implements OnInit {

  constructor(private LOCAL: LocalService, private GLOBAL: GlobalService) { }

  ngOnInit() {
  }

  public getLocalVariable(): string {
    return this.LOCAL.getVariable();
  }

  public getGlobalVariable(): string {
    return this.GLOBAL.getVariable();
  }

  setNewValues() {
    this.LOCAL.setVariable('New Local Value');
    this.GLOBAL.setVariable('New Global Value');
  }

}
