$(document).ready(function() {
    $('.progress').hide();
    $('.alert-danger').hide();
    $('.alert-success').hide();
    $('#frmAltaCliente').on('submit', function(e) {
        e.preventDefault();

        $.ajax({
            url: "paginas/altas/altaCliente/altaCliente.php",
            method: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            dataType: "json",
            processData: false,
            beforeSend: function() {
                $('.progress, .progress-bar').show();
                $('.file-progress').text('0%');
                $('.file-progress').css('width', '0%');
                $('#btn-submit').attr('disabled', 'disabled'),
                    $('#btn-submit').html(' <i class="fa fa-spinner fa-pulse fa-fw"></i> Processing...');
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        percentComplete = parseInt(percentComplete * 100);
                        $('.file-progress').text(percentComplete + '%');
                        $('.file-progress').css('width', percentComplete + '%');
                    }
                }, false);
                return xhr;
            },
            success: function(data) {
                if (data['status'] == "200") {
                    $('.alert-danger').hide();
                    $('.alert-success').show();
                    $('.success-message').html(data['message']);
                } else {
                    $('.alert-success').hide();
                    $('.alert-danger').show();
                    $('.warning-message').html(data['message']);
                }

                $('#frmAltaCliente')[0].reset();
                $('#btn-submit').attr('disabled', false);
                $('#btn-submit').html('Import XML Data');
            }
        });
        setTimeout(() => {
            $('.alert-danger').hide("normal");
            $('.alert-success').hide("normal");
            $('.progress').hide("normal");
            setTimeout(() => {
                $("#frmAltaCliente").parent().hide("normal");
            }, 1000);
        }, 3000);
    });
});