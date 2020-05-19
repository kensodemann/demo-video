import { Component } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { Platform } from '@ionic/angular';

declare var HKVideoPlayer;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(private platform: Platform, private videoPlayer: VideoPlayer) {}

  play() {
    if (this.platform.is('ios')) {
      HKVideoPlayer.play('https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4');
    } else {
      this.videoPlayer.play('https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4');
    }
  }
}
