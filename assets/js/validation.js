function validateForm() {
  var x = "";
  var fromcity = document.forms["myForm"]["fromcity"].value;
  var citydest = document.forms["myForm"]["citydest"].value;
  var fdate = document.forms["myForm"]["fdate"].value;
  var trip = document.forms["myForm"]["trip"].value;

  var fname = document.forms["myForm"]["fname"].value;
  var email = document.forms["myForm"]["email"].value;
  var adr = document.forms["myForm"]["adr"].value;
  var city = document.forms["myForm"]["city"].value;

  var ccnum = document.forms["myForm"]["ccnum"].value;
  var pin = document.forms["myForm"]["pin"].value;
  var expmonth = document.forms["myForm"]["expmonth"].value;

  var expyear = document.forms["myForm"]["expyear"].value;
  var cvv = document.forms["myForm"]["cvv"].value;

  if(!fromcity.match(/^[A-Za-z-\sšđčćžŠĐČĆŽ]+$/)) {
    x += "From-city\n"
  }
  if(!citydest.match(/^[A-Za-z-\sšđčćžŠĐČĆŽ]+$/)) {
    x += "City-destination\n"
  }
  if(!fdate.match(/^\d{1,2}[.]\d{1,2}[.](\d{2}|\d{4})$/)) {
    x += "Fligh date\n"
  }
  if(!trip){
    x += "Trip Type\n"
  }

  if(!fname.match(/^[A-Za-z.-\sšđčćžŠĐČĆŽ]+$/)) {
    x += "Name\n"
  }
  if(!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+$/)) {
    x += "Email\n"
  }
  if(!adr.match(/^[A-Za-z0-9.-\sšđčćžŠĐČĆŽ]+$/)) {
    x += "Adress\n"
  }
  if(!city.match(/^[A-Za-z-\sšđčćžŠĐČĆŽ]+$/)) {
    x += "City Residence\n"
  }

  if(!ccnum.match(/^\d{4}(\s|-)+\d{4}(\s|-)+\d{4}(\s|-)+\d{4}$/)) {
    x += "Credit Card Number\n"
  }
  if(pin === "") {
    x += "Pin\n"
  }
  if(!expmonth.match(/^(\d{1}|\d{2})$/)) {
    x += "Expiry Month\n"
  }
  if(!expyear.match(/^(\d{2}|\d{4})$/)) {
    x += "Expiry Year\n"
  }
  if(!cvv.match(/^(\d{3}|\d{4})$/)) {
    x += "CVV\n"
  }


  if(x != ""){
    alert("Please check the next fields:\n" + x);
    return false;
  }else{
    var str = '<center><img id="succ0" src="images/success.png" alt="success"><h3>Payment succesfull</h3><h4>Thank you for flying with us!</h4><a href="index.html">Back to Home</a></center><br><br>'; //it can be anything
    var Obj = document.getElementById('uiform');
    Obj.outerHTML=str;
  }
}
