import React, {Component} from 'react';
import Item from './../Item/Item'
import './Goods.css';
import FilterCategories from "./FilterCategories/FilterCategories";
import FilterName from "./FilterName/FilterName";
import FilterPrice from "./FilterPrice/FilterPrice";
import itemType from '../../type/typeItem'
import {AppContext} from "../../Context/context";
import {Pagination} from "../Pagination/Pagination";


type Props = {
    items: Array<itemType>;
    add: (id: number, count: number) => void;
    remove: (id: number, count: number) => void;
}

type State = {
    items: Array<itemType>,
    filterName: string,
    filterCategories: string,
    filterPrice: number[],
    pagination: {
        page: number,
        pageSize: number
    },
}


class Goods extends Component<Props, State> {
    state = {
        pagination: {
            page: 1,
            pageSize: 4
        },
        items: this.props.items,
        filterName: '',
        filterCategories: 'all',
        filterPrice: [0, Math.max.apply(Math, this.props.items.map((item) => item.sum))],
    };

    filterName = (name: string) => {
        this.setState({filterName: name});
    };

    filterCategories = (categories: string) => {
        this.setState({filterCategories: categories});
    };

    filterPriceDown = (price: number) => {
        this.setState({filterPrice: [+price, this.state.filterPrice[1]]});
    };

    filterPriceUp = (price: number) => {
        this.setState({filterPrice: [this.state.filterPrice[0], +price]});
    };

    setActivePage = (num: number) => {
        this.setState({
            pagination: {
                ...this.state.pagination, page: num
            }
        });
    };

    setQuantityPageElement = (pageSize: number, page: number) => {
        this.setState({
            pagination: {
                pageSize,
                page
            }
        });
    };

    render() {
        const context = this.context;
        const {items} = this.props;
        let {page, pageSize} = this.state.pagination;
        const {filterName, filterCategories, filterPrice} = this.state;
        let itemDraw = items
            .filter((item) => item.sum >= filterPrice[0] && item.sum <= filterPrice[1])// если "До === 0" выводит все элементы
            .filter((item) => item.categories.includes(filterCategories) || filterCategories === 'all')
            .filter((item) => filterName !== '' ? item.name.toLowerCase().includes(filterName.toLowerCase()) : item)
            .filter((item, index) =>
                index >= page * pageSize - pageSize && index < page * pageSize
            )
            .map(item =>
                <div className="Goods__item">
                    <Item item={item}
                          add={this.props.add}
                          remove={this.props.add}
                          nameButton={context.dictionary.button.buy}/>
                </div>
            );
        return (
            <div className="Goods">
                <h2 className="Goods__title"> {context.dictionary.nameList.goods} </h2>
                <form className='Goods__input'>
                    <FilterName filterName={this.filterName}/>
                    <FilterPrice items={this.props.items} filterPriceDown={this.filterPriceDown}
                                 filterPriceUp={this.filterPriceUp}/>
                    <FilterCategories items={this.props.items}
                                      filterCategories={this.filterCategories}/>
                </form>
                <div className="Goods__items">
                    {itemDraw}
                </div>
                <Pagination pagination={this.state.pagination}
                            quantityItems={this.props.items.length}
                            setActivePage={this.setActivePage}
                            setQuantityElement={this.setQuantityPageElement}/>
            </div>
        );
    }
}

Goods.contextType = AppContext;
export default Goods;
