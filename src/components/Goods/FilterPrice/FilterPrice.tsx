import React, {ChangeEvent, Component} from 'react';
import './FilterPrice.css';
import itemType from "../../../type/typeItem";
import {AppContext} from "../../../Context/context";

type Props = {
    items: Array<itemType>;
    filterPriceDown: (price: number) => void;
    filterPriceUp: (price: number) => void;
}

class FilterPrice extends Component<Props> {
    filterPriceDown = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.filterPriceDown(+event.target.value);
    };

    filterPriceUp = (event: ChangeEvent<HTMLInputElement>) => {
        if (!+event.target.value) {
            // возвращаем максимальную сумму, если "До" = false
            this.props.filterPriceUp(Math.max.apply(Math, this.props.items.map((item) => item.sum)))
        } else {
            this.props.filterPriceUp(+event.target.value);
        }
    };

    render() {
        const context = this.context.dictionary.goodsItems;
        return (
            <div className="Goods-filter-prices">
                <div>{context.filterPrice}</div>
                <div>
                    <input type="number" placeholder={context.filterPriceFrom} className='Goods-filter-price-input'
                           onChange={this.filterPriceDown} min={0}/>
                    <input type="number" placeholder={context.filterPriceBefore} className='Goods-filter-price-input'
                           onChange={this.filterPriceUp} min={0}/>
                </div>
            </div>
        );
    }
}

FilterPrice.contextType = AppContext;
export default FilterPrice;
