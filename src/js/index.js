$(document).ready(function () {
    $(document).on('click', '.popup-advent__close', function () {
        $('body').removeClass('in-popup-advent');
        $('.popup-advent--show').removeClass('popup-advent--show');
    });
    $(document).on('click', '.giftcards__item.gift-exist', function () {
        const popupAlias = $(this).data('popup');
        if (popupAlias)
        {
            $('body').addClass('in-popup-advent');
            $('.'+popupAlias)?.addClass('popup-advent--show');
        }
    });
    $(document).on('mousedown', function (e) {
        if ($('body').hasClass('in-popup-advent'))
        {
            const $popupAdventShow = document.querySelector('.popup-advent--show');
            if (e.target !== $popupAdventShow
                && !$popupAdventShow.contains(e.target))
            {
                $('body').removeClass('in-popup-advent');
                $('.popup-advent--show').removeClass('popup-advent--show');
            }
        }
    });
});