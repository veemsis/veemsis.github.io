function Randx(){
    var array= [1,2,3,4,7,9];



    this.start = function () {
      var number =Math.floor(Math.random()*5);
        console.log(array[0]);

        $('#window').text(array[number]);

};


}





var Task = new Randx();

$(document).ready(function () {
    $( 'form' ).on('click','#bstart', function () {

        Task.start();
      });

});
