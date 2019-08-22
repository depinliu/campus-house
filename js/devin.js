$(document).ready(function(){

		$("#subm1").submit(function(dey){
			var cp = $(".capcha").val();
			var cpc = '4D7YS'
			var namaa = $(".namaa input").val();
			var pertanyaan = $(".pertanyaan textarea").val();
			if(cp == cpc){
				
				alert ("Terima kasih " + namaa +"\nPertanyaan anda : " + pertanyaan +  "\n\nTerkirim");
			}
			else if(cp=='' || namaa=='' || pertanyaan==''){
				alert ("Tulis sesuatu");
				dey.preventDefault();
			}
			else{
				alert ("Captcha salah, silahkan ulangi");
				dey.preventDefault();
			}
			
			
			
		});
		
		
		
		$("#devin").click(function(){
			$(".test01").removeClass("dspNone");
			$(".test01").addClass("dspBlock");
			$(".baru2").addClass("baru");
		});
		
		$(".close").click(function(){
			$(".test01").removeClass("dspBlock");
			$(".test01").addClass("dspNone");
			$(".baru2").removeClass("baru");
		});
		$("#login").submit(function(de){
			var eid = $("#emailv").val();
			var vid = $("#passv").val();
			var eidT = 'devin@gmail.com';
			var vidT = 'devin123';
			
			if(eid==eidT && vid==vidT){
				alert ("Berhasil Log In !!\n\nSelamat Datang Tn.Devin");
			}
			else if(eid=='' && vid==''){
				alert ("Anda belum mengisi");
				de.preventDefault();
			}
			else{
				alert ("Akun tidak ada");
				de.preventDefault();
				eid =$("#emailv").val('');;
				vid =$("#passv").val('');
			}
		});
		$("#nyari").focus(function(){
			$(".dd").addClass("nyari2");
		});
		$("#nyari").focusout(function(){
			$(".dd").removeClass("nyari2");
		});
		
		class PhotoSubmission {
    constructor() {
        const inputs = document.querySelectorAll('.js-photo_submit-input');

        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('change', this.uploadImage);
        }
    }

    uploadImage(e) {
        const fileInput = e.target;
        const uploadBtn = e.target.parentNode;
        const deleteBtn = e.target.parentNode.childNodes[7];

        const reader = new FileReader();

        reader.onload = function(e) {
            uploadBtn.setAttribute('style', `background-image: url('${e.target.result}');`);
            uploadBtn.classList.add('photo_submit--image');
            fileInput.setAttribute('disabled', 'disabled');
        };

        reader.readAsDataURL(e.target.files[0]);

        deleteBtn.addEventListener('click', () => {
            uploadBtn.removeAttribute('style');
            uploadBtn.classList.remove('photo_submit--image');
            
            setTimeout(() => {
                fileInput.removeAttribute('disabled', 'disabled');
            }, 200);
        });
    }
};

new PhotoSubmission;
});


