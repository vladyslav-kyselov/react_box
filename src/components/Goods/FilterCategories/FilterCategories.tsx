import React, {ChangeEvent, Component} from 'react';
import './FilterCategories.css';
import itemType from '../../../type/typeItem'
import {AppContext} from "../../../Context/context";

type Props = {
    items: Array<itemType>;
    filterCategories: (event: string) => void;
}

class FilterCategories extends Component<Props> {
    filterCategories = (event: ChangeEvent<HTMLSelectElement>) => {
        this.props.filterCategories(event.target.value);
    };

    render() {
        const context = this.context.dictionary.goodsItems;
        const {items} = this.props;
        let categories = Array.from(new Set(items.map((i) => i.categories))).map((item) => (
            <option value={item}>{item}</option>)
        );
        return (
            <div className="Goods-categories">
                <div>{context.filterCategories}</div>
                <select name="cars" onChange={this.filterCategories}>
                    <option selected value="all">{context.filterCategoriesAllCars}</option>
                    {categories}
                </select>
            </div>
        );
    }
}

FilterCategories.contextType = AppContext;
export default FilterCategories;
