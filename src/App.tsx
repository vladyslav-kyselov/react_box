import React, {Component} from 'react';
import Goods from './components/Goods/Goods';
import Box from "./components/Box/Box";
import './App.css';
import Item from './type/typeItem'
import {Dictionary, Lang} from './type/typeLang'
import {AppContext} from "./Context/context";

type Props = {}

type State = {
    boxItems: Array<Item>;
    goodsItems: Array<Item>
    lang: Lang,
    dictionary?: Dictionary
}


const items = [
    {
        id: 0,
        name: 'BMW X6',
        sum: 4000,
        count: 1,
        categories: 'BMW',
        images: ['http://cdn.motorpage.ru/Photos/800/1107C.jpg', 'http://cdn.motorpage.ru/Photos/800/8915.jpg', 'http://cdn.motorpage.ru/Photos/800/982A.jpg', 'http://cdn.motorpage.ru/Photos/800/10867.jpg', 'http://cdn.motorpage.ru/Photos/800/11572.jpg']
    },
    {
        id: 1,
        name: 'BMW X5',
        sum: 5000,
        count: 1,
        categories: 'BMW',
        images: ['http://cdn.motorpage.ru/Photos/800/BMW_G05_000.jpg', 'http://cdn.motorpage.ru/Photos/800/BMW_G05_001.jpg', 'http://cdn.motorpage.ru/Photos/800/BMW_G05_006.jpg', 'http://cdn.motorpage.ru/Photos/800/BMW_G05_011.jpg', 'http://cdn.motorpage.ru/Photos/800/BMW_G05_007.jpg']
    },
    {
        id: 2,
        name: 'BMW X4',
        sum: 3200,
        count: 1,
        categories: 'BMW',
        images: ['http://cdn.motorpage.ru/Photos/800/2DD4.jpg', 'http://cdn.motorpage.ru/Photos/800/4BA5.jpg', 'http://cdn.motorpage.ru/Photos/800/6A1A.jpg', 'http://cdn.motorpage.ru/Photos/800/798F.jpg', 'http://cdn.motorpage.ru/Photos/800/88F5.jpg']
    },
    {
        id: 3,
        name: 'Mazda 3',
        sum: 6200,
        count: 1,
        categories: 'MAZDA',
        images: ['http://cdn.motorpage.ru/Photos/800/2E11.jpg', 'http://cdn.motorpage.ru/Photos/800/11586.jpg', 'http://cdn.motorpage.ru/Photos/800/6A52.jpg', 'http://cdn.motorpage.ru/Photos/800/79C9.jpg', 'http://cdn.motorpage.ru/Photos/800/892D.jpg']
    },
    {
        id: 4,
        name: 'Mazda 6',
        sum: 4300,
        count: 1,
        categories: 'MAZDA',
        images: ['http://cdn.motorpage.ru/Photos/800/3C0C.jpg', 'http://cdn.motorpage.ru/Photos/800/8884.jpg', 'http://cdn.motorpage.ru/Photos/800/1621D.jpg', 'http://cdn.motorpage.ru/Photos/800/107E6.jpg', 'http://cdn.motorpage.ru/Photos/800/14329.jpg']
    },
    {
        id: 5,
        name: 'Mazda CX-3',
        sum: 4320,
        count: 1,
        categories: 'MAZDA',
        images: ['http://cdn.motorpage.ru/Photos/800/2D56.jpg', 'http://cdn.motorpage.ru/Photos/800/97A9.jpg', 'http://cdn.motorpage.ru/Photos/800/107E7.jpg', 'http://cdn.motorpage.ru/Photos/800/1621E.jpg', 'http://cdn.motorpage.ru/Photos/800/152AC.jpg']
    },
    {
        id: 6,
        name: 'Honda Civic 5D',
        sum: 5400,
        count: 1,
        categories: 'HONDA',
        images: ['http://cdn.motorpage.ru/Photos/800/221EC.jpg', 'http://cdn.motorpage.ru/Photos/800/241C1.jpg', 'http://cdn.motorpage.ru/Photos/800/251FA.jpg', 'http://cdn.motorpage.ru/Photos/800/261B0.jpg', 'http://cdn.motorpage.ru/Photos/800/271A5.jpg']
    },
    {
        id: 7,
        name: 'Honda Pilot',
        sum: 3900,
        count: 1,
        categories: 'HONDA',
        images: ['http://cdn.motorpage.ru/Photos/800/46132.jpg', 'http://cdn.motorpage.ru/Photos/800/59FC.jpg', 'http://cdn.motorpage.ru/Photos/800/590B.jpg', 'http://cdn.motorpage.ru/Photos/800/68AE.jpg', 'http://cdn.motorpage.ru/Photos/800/78E6.jpg']
    },
    {
        id: 8,
        name: 'Honda CR-V',
        sum: 3100,
        count: 1,
        categories: 'HONDA',
        images: ['http://cdn.motorpage.ru/Photos/800/3D4B.jpg', 'http://cdn.motorpage.ru/Photos/800/7A3C.jpg', 'http://cdn.motorpage.ru/Photos/800/899F.jpg', 'http://cdn.motorpage.ru/Photos/800/108E8.jpg', 'http://cdn.motorpage.ru/Photos/800/115F0.jpg']
    },
    {
        id: 9,
        name: 'Lexus RX 350',
        sum: 5200,
        count: 1,
        categories: 'LEXUS',
        images: ['http://cdn.motorpage.ru/Photos/800/11034.jpg', 'http://cdn.motorpage.ru/Photos/800/4B85.jpg', 'http://cdn.motorpage.ru/Photos/800/5A95.jpg', 'http://cdn.motorpage.ru/Photos/800/88D8.jpg', 'http://cdn.motorpage.ru/Photos/800/10831.jpg']
    },
    {
        id: 10,
        name: 'Lexus UX 250',
        sum: 4500,
        count: 1,
        categories: 'LEXUS',
        images: ['http://cdn.motorpage.ru/Photos/800/2E03.jpg', 'http://cdn.motorpage.ru/Photos/800/3CBD.jpg', 'http://cdn.motorpage.ru/Photos/800/4BD4.jpg', 'http://cdn.motorpage.ru/Photos/800/891F.jpg', 'http://cdn.motorpage.ru/Photos/800/9834.jpg']
    },
    {
        id: 11,
        name: 'Lexus LS 500',
        sum: 5400,
        count: 1,
        categories: 'LEXUS',
        images: ['http://cdn.motorpage.ru/Photos/800/2C1C.jpg', 'http://cdn.motorpage.ru/Photos/800/49FE.jpg', 'http://cdn.motorpage.ru/Photos/800/591E.jpg', 'http://cdn.motorpage.ru/Photos/800/10710.jpg', 'http://cdn.motorpage.ru/Photos/800/123D9.jpg']
    },
    {
        id: 12,
        name: 'Ford Focus',
        sum: 2200,
        count: 1,
        categories: 'FORD',
        images: ['http://cdn.motorpage.ru/Photos/800/1FF8.jpg', 'http://cdn.motorpage.ru/Photos/800/69C7.jpg', 'http://cdn.motorpage.ru/Photos/800/7941.jpg', 'http://cdn.motorpage.ru/Photos/800/88A2.jpg', 'http://cdn.motorpage.ru/Photos/800/97C5.jpg']
    },
    {
        id: 13,
        name: 'Ford Mondeo',
        sum: 2300,
        count: 1,
        categories: 'FORD',
        images: ['http://cdn.motorpage.ru/Photos/800/Ford_00.jpg', 'http://cdn.motorpage.ru/Photos/800/Ford_1B.jpg', 'http://cdn.motorpage.ru/Photos/800/Ford_3D.jpg', 'http://cdn.motorpage.ru/Photos/800/Ford_65.jpg', 'http://cdn.motorpage.ru/Photos/800/Ford_73.jpg']
    },
    {
        id: 14,
        name: 'Ford Mustang',
        sum: 6600,
        count: 1,
        categories: 'FORD',
        images: ['http://cdn.motorpage.ru/Photos/800/477.jpg', 'http://cdn.motorpage.ru/Photos/800/65D.jpg', 'http://cdn.motorpage.ru/Photos/800/1A9.jpg', 'http://cdn.motorpage.ru/Photos/800/37B.jpg', 'http://cdn.motorpage.ru/Photos/800/285.jpg']
    },
    {
        id: 15,
        name: 'Ford Fusion',
        sum: 4600,
        count: 1,
        categories: 'FORD',
        images: ['http://cdn.motorpage.ru/Photos/800/65C1.jpg', 'http://cdn.motorpage.ru/Photos/800/1AC6.jpg', 'http://cdn.motorpage.ru/Photos/800/36DD.jpg', 'http://cdn.motorpage.ru/Photos/800/1049B.jpg', 'http://cdn.motorpage.ru/Photos/800/8511.jpg']
    },
    {
        id: 16,
        name: 'Ford Edge',
        sum: 3100,
        count: 1,
        categories: 'FORD',
        images: ['http://cdn.motorpage.ru/Photos/800/3A4D.jpg', 'http://cdn.motorpage.ru/Photos/800/496A.jpg', 'http://cdn.motorpage.ru/Photos/800/77D0.jpg', 'http://cdn.motorpage.ru/Photos/800/1DE6.jpg', 'http://cdn.motorpage.ru/Photos/800/5897.jpg']
    },
    {
        id: 17,
        name: 'Nissan X-Trail',
        sum: 5800,
        count: 1,
        categories: 'NISSAN',
        images: ['http://cdn.motorpage.ru/Photos/800/115C5.jpg', 'http://cdn.motorpage.ru/Photos/800/4C47.jpg', 'http://cdn.motorpage.ru/Photos/800/5B52.jpg', 'http://cdn.motorpage.ru/Photos/800/124E7.jpg', 'http://cdn.motorpage.ru/Photos/800/9896.jpg']
    },
    {
        id: 18,
        name: 'Nissan GT-R',
        sum: 6400,
        count: 1,
        categories: 'NISSAN',
        images: ['http://cdn.motorpage.ru/Photos/800/1105F.jpg', 'http://cdn.motorpage.ru/Photos/800/88FC.jpg', 'http://cdn.motorpage.ru/Photos/800/11563.jpg', 'http://cdn.motorpage.ru/Photos/800/133D1.jpg', 'http://cdn.motorpage.ru/Photos/800/1435B.jpg']
    },
    {
        id: 19,
        name: 'Nissan Juke',
        sum: 4150,
        count: 1,
        categories: 'NISSAN',
        images: ['http://cdn.motorpage.ru/Photos/800/110F9.jpg', 'http://cdn.motorpage.ru/Photos/800/5B47.jpg', 'http://cdn.motorpage.ru/Photos/800/897F.jpg', 'http://cdn.motorpage.ru/Photos/800/988E.jpg', 'http://cdn.motorpage.ru/Photos/800/108C9.jpg']
    },
    {
        id: 20,
        name: 'Nissan Qashqai',
        sum: 4000,
        count: 1,
        categories: 'NISSAN',
        images: ['http://cdn.motorpage.ru/Photos/800/3D6B.jpg', 'http://cdn.motorpage.ru/Photos/800/4C7E.jpg', 'http://cdn.motorpage.ru/Photos/800/5B8B.jpg', 'http://cdn.motorpage.ru/Photos/800/98CB.jpg', 'http://cdn.motorpage.ru/Photos/800/10907.jpg']
    },
];

class App extends Component<Props, State> {
    state: State = {
        goodsItems: items,
        boxItems: [],
        lang: 'ua',
    };

    loadDictionary(lang: Lang) {
        fetch(`/i18n/${lang}.json`)
            .then(result => result.json())
            .then((data) => {
                this.setState({dictionary: data});
            });
    }

    componentDidMount() {
        this.loadDictionary(this.state.lang);
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>,) {
        if (this.state.lang !== prevState.lang) {
            this.loadDictionary(this.state.lang);
        }
    }

    add = (ids: number, count: number) => {
        this.setState(({goodsItems, boxItems}) => {
            const check = boxItems.some((item) => item.id === ids);//ищем есть ли такой элемент в корзине
            let arrayUniqueObject;
            if (check) {
                //если есть такое item, находим его и изменяем ему счётчик
                arrayUniqueObject =
                    boxItems.map((item) => item.id === ids ? {...item, count: item.count + count} : item)
            } else {
                // если нету, просто добавляем товар в корзину
                arrayUniqueObject = [{...goodsItems[ids], count: count, sum: goodsItems[ids].sum}, ...boxItems];
            }
            return {
                boxItems: [...arrayUniqueObject]
            }
        });
    };

    remove = (id: number, count: number) => {
        this.setState(({boxItems}) => {
            return {
                boxItems: boxItems.filter((element) => id !== element.id),
            }
        })
    };


    render() {
        if (!this.state.dictionary) {
            return null;
        }

        const contextValue = {
            dictionary: this.state.dictionary,
            changeLang: (lang: Lang) => this.setState({lang: lang}),
            lang: this.state.lang,
        };

        return (
            <AppContext.Provider value={contextValue}>
                <div className="App">
                    <Goods items={this.state.goodsItems} add={this.add} remove={this.remove}/>
                    <Box items={this.state.boxItems} add={this.add} remove={this.remove}/>
                </div>
            </AppContext.Provider>
        );
    }
}


export default App;
