export type Dictionary = {
    item: {
        "price": string,
        "quantity": string
    },
    button: {
        buy: string,
        delete: string,
        from: string,
        before: string
    },
    nameList: {
        goods: string,
        box: string
    },
    goodsItems: {
        filterName: string,
        filterNamePlaceholder: string,
        filterPrice: string,
        filterPriceFrom: string,
        filterPriceBefore: string,
        filterCategories: string,
        filterCategoriesAllCars: string
    },
    boxItems: {
        sum: string,
        selectLang: string
    },
    "pagination": {
        "outputElement": string,
    }
}

export type Lang = 'ua' | 'en' | 'ru';
