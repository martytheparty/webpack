function loadAdder() {

  var source = document.getElementById('mega-adder-entry');
  var target = document.getElementById('mega-adder-result');

  function adderHandler (event) {
    var finalValue =  source.value*1 + 100;
    target.innerHTML = " Total: $" + finalValue + ".00";
  }

  source.onkeyup=adderHandler;
  $("#mega-adder").addClass("loaded");
}

setTimeout(loadAdder, 2000);
