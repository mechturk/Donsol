function Card(sym,value,type,name = "Unknown")
{
  this.symbol = sym;
  this.value = value;
  this.type  = type;
  this.name = name;
  
  this.element = null;
  this.is_flipped = false;
    
  this.install = function()
  {
    var e = document.createElement("card");
    e.setAttribute("class",this.type+" card_"+this.value);
    
    // Face
    var face = document.createElement("div");
    face.setAttribute("class","face");
    e.appendChild(face);
    
    // Value
    var value = document.createElement("span");
    value.setAttribute("class","value");
    value.innerHTML = this.symbol;
    face.appendChild(value);
    
    // Badge
    var badge = document.createElement("img");
    badge.setAttribute("src","media/"+this.type+"/"+this.value+".svg");
    // badge.setAttribute("src","media/heart/10.svg");
    face.appendChild(badge);
    
    // Name
    var name_element = document.createElement("span");
    name_element.setAttribute("class","name");
    name_element.innerHTML = this.name+" "+this.value;
    face.appendChild(name_element);
    
    // Icon
    face.appendChild(new Icon(this.type).install());
    
    addClickHandler(e,this,this.value);
    
    this.element = e;
    
    return e;
  }
  
  function addClickHandler(elem, object)
  {
    elem.addEventListener('click', function(e) { object.touch(); }, false);
  }
  
  this.touch = function()
  {
    console.log("??")
  }
  
  this.flip = function()
  {
    var target_element = this.element;
  
    this.is_flipped = true;
    donsol.player.experience.value += 1;
    donsol.player.experience.update();
    
    $(target_element).animate({ opacity: 0.01, top: "-10" }, 100, function() {
      target_element.setAttribute("class","flipped");
    });
    
    donsol.player.update();
  }
  
}