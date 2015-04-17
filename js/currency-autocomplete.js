$(function(){
    var languages = [
        { value: 'Английский язык', data: 'ENG' },
        { value: 'Арабский язык', data: '' },
        { value: 'Испанский язык', data: '' },
        { value: 'Итальянский язык', data: '' },
        { value: 'Китайский Мандарин', data: '' },
        { value: 'Немецкий язык', data: '' },
        { value: 'Польский язык', data: '' },
        { value: 'Португальский язык', data: '' },
        { value: 'Русский язык', data: '' },
        { value: 'Украинский язык', data: '' },
        { value: 'Французский язык', data: '' },
        { value: 'Японский язык', data: '' }
    ];

    var cities = [
        { value: 'Днепропетровск', data: '' },
        { value: 'Донецк', data: '' },
        { value: 'Запорожье', data: '' },
        { value: 'Киев', data: '' },
        { value: 'Львов', data: '' },
        { value: 'Одесса', data: '' },
        { value: 'Харьков', data: '' },
        { value: 'Гомель', data: '' },
        { value: 'Минск', data: '' },
        { value: 'Волгоград', data: '' },
        { value: 'Воронеж', data: '' },
        { value: 'Екатеринбург', data: '' }
    ];

    // setup autocomplete function pulling from currencies[] array
    $('#autocomplete_languages').autocomplete({
        lookup: languages,
        showNoSuggestionNotice: true,
        noSuggestionNotice: "Попробуйте изменить поисковый запрос"
    });

    $('#autocomplete_cities').autocomplete({
        lookup: cities,
        showNoSuggestionNotice: true,
        noSuggestionNotice: "Попробуйте изменить поисковый запрос"
    });

});