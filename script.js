<script>
  function Loading(){
    $('.wrap-loading').removeClass('display-none');    
  jQuery('.goods-list').find('input[type="checkbox"]:checked').each(function () {
     jQuery.ajax({
                    type: 'post',
                            data: {},
                            cache: false,
                            success: function (returndata) {
                                    $('.wrap-loading').addClass('display-none');
                                }
                            }
                        });
                    }
                }
            });

        }
  }
}
</script>

<style>
    .wrap-loading{ /*화면 전체를 어둡게 합니다.*/
        z-index: 1000;
        position: fixed;
        width: 100%; height: 100%;
        left: 0; top: 0;
        background-color: rgba(0,0,0, 0.4);
   /* ie */
    }

    .wrap-loading div{ /*로딩 이미지*/
        position: fixed;
        top:50%;
        left:50%;
        margin-left: -21px;
        margin-top: -21px;
        }

    .display-none{ /*감추기*/
        display:none;
    }
</style>

<div class="wrap-loading display-none">
    <div><img src="https://tistory2.daumcdn.net/tistory/1898109/skin/images/Spinner.gif" /></div>
</div> 
