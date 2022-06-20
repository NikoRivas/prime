window.onload = function () {
  document.querySelector('button#prime').onclick = function () {
    document.getElementById('n1').style.backgroundColor = null;
    document.getElementById('n4').style.backgroundColor = null;
    document.getElementById('n6').style.backgroundColor = null;
    document.getElementById('n8').style.backgroundColor = null;
    document.getElementById('n9').style.backgroundColor = null;
    document.getElementById('n10').style.backgroundColor = null;
    // setting the backgroundColor for prime numbers
    document.getElementById('n2').style.backgroundColor = 'aqua';
    document.getElementById('n3').style.backgroundColor = 'aqua';
    document.getElementById('n5').style.backgroundColor = 'aqua';
    document.getElementById('n7').style.backgroundColor = 'aqua';
  };

  document.querySelector('button#composite').onclick = function () {
    // clearing the backgroundColor for prime numbers
    document.getElementById('n1').style.backgroundColor = null;
    document.getElementById('n2').style.backgroundColor = null;
    document.getElementById('n3').style.backgroundColor = null;
    document.getElementById('n5').style.backgroundColor = null;
    document.getElementById('n7').style.backgroundColor = null;
    // setting the backgroundColor for composite numbers
    document.getElementById('n4').style.backgroundColor = 'yellow';
    document.getElementById('n6').style.backgroundColor = 'yellow';
    document.getElementById('n8').style.backgroundColor = 'yellow';
    document.getElementById('n9').style.backgroundColor = 'yellow';
    document.getElementById('n10').style.backgroundColor = 'yellow';
  };

  document.querySelector('button#allNumbers').onclick = function () {
    //selecting all numbers
    document.getElementById('n1').style.backgroundColor = 'teal';
    document.getElementById('n2').style.backgroundColor = 'teal';
    document.getElementById('n3').style.backgroundColor = 'teal';
    document.getElementById('n5').style.backgroundColor = 'teal';
    document.getElementById('n7').style.backgroundColor = 'teal';
    document.getElementById('n4').style.backgroundColor = 'teal';
    document.getElementById('n6').style.backgroundColor = 'teal';
    document.getElementById('n8').style.backgroundColor = 'teal';
    document.getElementById('n9').style.backgroundColor = 'teal';
    document.getElementById('n10').style.backgroundColor = 'teal';
  };
};
