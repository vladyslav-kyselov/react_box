import React, {ChangeEvent, Component} from 'react';
import './FilterName.css'
import {AppContext} from "../../../Context/context";

type Props = {
    filterName: (name: string) => void;
}

class FilterName extends Component<Props> {
    filterName = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.filterName(e.target.value);
    };

    render() {
        const context = this.context.dictionary.goodsItems;
        return (
            <div className="Goods-filter-name">
                <div>{context.filterName}</div>
                <input type="text" onChange={this.filterName}
                       placeholder={context.filterNamePlaceholder}/>
            </div>
        );
    }
}

FilterName.contextType = AppContext;
export default FilterName;
