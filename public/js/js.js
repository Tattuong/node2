//popup
const modal = document.getElementsByClassName('card-header');
const btn = document.getElementsByClassName("myBtn");
const span = document.getElementsByClassName("close");

btn[0].onclick =() => {
    modal[0].style.display = "block";
}


span[0].onclick = () => {
    modal[0].style.display = "none";1
}	

window.onclick = function(event) {
    if (event.target == modal[0]) {
         modal[0].style.display = "none";
     }
    if (event.target == modal[1]) {
         modal[1].style.display = "none";
     }  
	}

    //checkbox
    $('#selectAll').click(function(e) {
        if($(this).hasClass('checkedAll')) {
          $('input').prop('checked', false);   
          $(this).removeClass('checkedAll');
        } else {
          $('input').prop('checked', true);
          $(this).addClass('checkedAll');
        }
    });

