function loadAdder() {

  var source = document.getElementById('mega-adder-entry');
  var target = document.getElementById('mega-adder-result');

  function adderHandler (event) {
    var finalValue =  source.value*1 + 100;
    var adderHtml = window.adderHTML;
    adderHtml = adderHtml.replace("[finalValue]", finalValue);
    target.innerHTML = " " + adderHtml;
  }

  source.onkeyup=adderHandler;
  $("#mega-adder").addClass("loaded");
}

setTimeout(loadAdder, 2000);
