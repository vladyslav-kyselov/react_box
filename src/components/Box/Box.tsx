import React, {Component} from 'react';
import Item from "../Item/Item";
import './Box.css';
import itemType from "../../type/typeItem"
import {AppContext} from "../../Context/context";
import {SwitcherLang} from "../SwitcherLang/SwitcherLang";
import {Pagination} from "../Pagination/Pagination";

type Props = {
    items: Array<itemType>;
    remove: (id: number, count: number) => void;
    add: (id: number, count: number) => void;
}

type State = {
    pagination: {
        page: number,
        pageSize: number
    },
}

class Box extends Component<Props, State> {
    state = {
        pagination: {
            page: 1,
            pageSize: 3
        },
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
        const dictionary = this.context.dictionary;
        const {items} = this.props;
        let {page, pageSize} = this.state.pagination;
        let itemDraw = items.map(item => (
            <div>
                <Item item={item}
                      remove={this.props.remove}
                      add={this.props.add}
                      nameButton={dictionary.button.delete}
                />
            </div>
        ));
        let sumAll = items.reduce((prev, curr) => (prev + curr.sum * curr.count), 0);

        return (
            <div className="Box">
                <h2 className="Box__title">{dictionary.nameList.box}</h2>
                <SwitcherLang lang={dictionary.lang} changeLang={this.context.changeLang}/>
                <div className="Box__items">{itemDraw.filter((item, index) =>
                    index >= page * pageSize - pageSize && index < page * pageSize
                )}</div>
                <p className='Box__sum'>{dictionary.boxItems.sum}: {sumAll}$ </p>
                <div className="Box__pagination">
                    <Pagination pagination={this.state.pagination}
                                quantityItems={itemDraw.length < 1 ? 1 : itemDraw.length}
                                setActivePage={this.setActivePage}
                                setQuantityElement={this.setQuantityPageElement}/>
                </div>
            </div>
        );
    }
}

Box.contextType = AppContext;
export default Box;
