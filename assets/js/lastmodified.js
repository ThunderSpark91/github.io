$(document).ready(function() {
    $("#lastModified").text('Laaste aanpassing: ' + newmodifieddate);
});


var Lastmodified = new Date(document.lastModified);
 
var newmodifieddate = new Intl.DateTimeFormat('en-GB').format(Lastmodified);
