$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();

    $("#warning-responses").show();
    $("input:checkbox[name=stress-warning]:checked").each(function(){
      var stressWarningSymptoms = $(this).val();
      $("#warning-responses").append(stressWarningSymptoms + "<br>")
    });

    $("#sign-responses").show();
    $("input:checkbox[name=health-signs]:checked").each(function(){
      var healthSignsSymptoms = $(this).val();
      $("#sign-responses").append(healthSignsSymptoms + "<br>")
    });

    $("#manage-responses").show();
    $("input:checkbox[name=stress-manager]:checked").each(function(){
      var stressControlTips = $(this).val();
      $("#manage-responses").append(stressControlTips + "<br>")
    });
    $('#stress-test').hide();
  })
})
