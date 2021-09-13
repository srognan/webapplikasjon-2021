function lengstOrd(tekst) {
    var lengst = 0;
    var string = tekst.split(" ");
    var ord = null;
    
    string.forEach(function(string) {
        if (lengst < string.length) {
            lengst = string.length;
            ord = string;
        }
    });
    return ord;
  }
  
  
  console.log(lengstOrd("Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard."));