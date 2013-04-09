// Speed test
// getElementById vs. getElementsByClassName
// go to www.google.com.hk
// use chrome
// paste the code to console

function test(by, key) {
 var f = 0.0;
 var n = 10;
 for (t=0; t < n; ++t) {
  var start;
  if (by == 'id') {
   start = new Date().getTime();
   for (i = 0; i < 1000000; ++i) {
     document.getElementById(key);
   }
  } else if (by == 'class') {
   start = new Date().getTime();
   for (i = 0; i < 1000000; ++i) {
    document.getElementsByClassName(key);
   }
  }

  var end = new Date().getTime();
  var time = end - start;
  //alert('Execution time: ' + time);
  f = f + time;
 }
 alert(f/n);
}

test('id','body'); //48.8ms on average
test('class','ctr-p'); //66.3ms on average
// getElementById wins