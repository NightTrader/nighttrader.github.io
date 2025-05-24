
$(document).ready(function() {
	'use strict';

  /*--------------------------------------------
  File Input
  --------------------------------------------*/
  function handleChange(inputId) {
    var fileUploader = document.getElementById(inputId);
    var getFile = fileUploader.files

    
    var uploadedFile = getFile[getFile.length - 1];
    readFile(uploadedFile, inputId);
      

  }

  $('.input-file').on('change', function(e) {
    handleChange(e.target.id);
  })

  function readFile(uploadedFile, inputId) {
    if (uploadedFile) {
      var reader = new FileReader();
      reader.onload = () => {
        var parent = document.getElementById('p-' + inputId);
        parent.innerHTML = `<img class="preview-content img-fluid" src=${reader.result} />`;
      };

      reader.readAsDataURL(uploadedFile);
    }
  };

})


/*-- requier  js --*/
$("#commentForm").validate();
