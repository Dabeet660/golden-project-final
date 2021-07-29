class Form{
    
    constructor(){
    this.volumeu = createButton('Volume Up');
    this.volumed = createButton('Volume Down');
    this.mute = createButton('Mute');
    this.unmute = createButton('Unmute');
    }

    display(){
    // Volume Up , position + styling
    this.volumeu.position(displayWidth/2+265,displayHeight/2-510);
    this.volumeu.style('color','#000000');
    this.volumeu.style('background-color','#83ff00');
    this.volumeu.style('border-radius','80px')

    this.volumed.position(displayWidth/2+100,displayHeight/2-510);
    this.volumed.style('color','#000000');
    this.volumed.style('background-color','#83ff00');
    this.volumed.style('border-radius','80px')

    this.mute.position(displayWidth/2+50,displayHeight/2-510);
    this.mute.style('color','#000000');
    this.mute.style('background-color','#83ff00');
    this.mute.style('border-radius','80px');

    this.unmute.position(displayWidth/2+200,displayHeight/2-510);
    this.unmute.style('color','#000000');
    this.unmute.style('background-color','#83ff00');
    this.unmute.style('border-radius','80px');
    
    this.volumeu.mousePressed(() => {
        intro_sound.setVolume(1)
    })
    this.volumed.mousePressed(() => { 
      intro_sound.setVolume(0.5)
    })
    this.mute.mousePressed(() => {
      intro_sound.setVolume(0)
    })
    this.unmute.mousePressed(() => {
      intro_sound.setVolume(1)
    })   
    }
    
}