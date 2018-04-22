function animate(){

  Pts.namespace( window );
  var space = new CanvasSpace("#headerAnim");
  space.setup({ bgcolor: "#e0baba" });

  document.addEventListener("mousemove", mouseIn, false);

  function mouseIn(){
    var form = space.getForm();
    space.add( () => form.point( space.pointer, 10 ) );
  }

  console.log(space.pointer);

}
animate();
