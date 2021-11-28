function touch(Mousey,allSprites){
if(Mousey.x-allSprites.x<Mousey.width/2+allSprites.width/2 
  && allSprites.x-Mousey.x<Mousey.width/2+allSprites.width/2 
  && Mousey.y-allSprites.y<Mousey.height/2+allSprites.height/2 
  && allSprites.y-Mousey.y<Mousey.height/2+allSprites.height/2){
  return true
    
}
}