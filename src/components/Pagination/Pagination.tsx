import React, {Component} from 'react';
import './Pagination.css'
import {AppContext} from "../../Context/context";

type Props = {
    pagination: {
        page: number,
        pageSize: number
    }
    quantityItems: number,
    setActivePage: (num: number) => void,
    setQuantityElement: (quantityPageElement: number, quantityElement: number) => void,
};

type State = {
    page: number,
}

export class Pagination extends Component<Props, State> {
    state: State = {
        page: this.props.pagination.page,
    };

    setActivePage = (num: number) => {
        this.props.setActivePage(num);
        this.setState({page: num});
    };

    activePageDown = () => {
        //возможность уменьшить страницу только до первой
        if (this.state.page !== 1) {
            this.props.setActivePage(this.state.page - 1);
            this.setState({page: this.state.page - 1})
        }
    };
    activePageUp = (quantityPage: number) => {
        //возможность увеличить страницу только до последней
        if (this.state.page !== quantityPage) {
            this.setState({page: this.state.page + 1});
            this.props.setActivePage(this.state.page + 1);
        }
    };

    setQuantityElement = (quantity: number) => {
        //если выбранная страница была больше чем существует страниц сейчас, то присваиваем ей последнюю страницу
        const activePage =
            Math.ceil(this.props.quantityItems / quantity) < this.state.page ?
                Math.ceil(this.props.quantityItems / quantity)
                : this.state.page;
        this.setState({
            page: activePage,
        });
        this.props.setQuantityElement(quantity, activePage);
    };

    render() {
        const paginationContext = this.context.dictionary.pagination;
        const quantityPage = Math.ceil(this.props.quantityItems / this.props.pagination.pageSize);
        const pages = [];
        for (let i = 1; i <= quantityPage; i++) {
            pages.push(i)
        }
        let pagination = pages.map((number, i) => <span
            className={i === this.state.page - 1 ? 'selected pagination-item' : 'pagination-item'}
            onClick={() => this.setActivePage(number)}>
                        {number}
                    </span>);

        if (quantityPage > 11) {
            const checkDozen = Math.ceil(this.state.page / 10) * 10;
            pagination = pagination.filter((item, index) => index >= checkDozen - 11 && index <= checkDozen)
        }
        return (
            <div className="pagination">
                <div className="pagination__arrow left" onClick={this.activePageDown}/>
                {pagination}
                <div className="pagination__arrow right" onClick={() => this.activePageUp(quantityPage)}/>
                <ul className="menu-quantity-page-element">
                    <li className='menu-quantity-page-element__list'>
                        {paginationContext.outputElement}
                        <ul className="list__menu">
                            <li className="menu__item"
                                onClick={() => this.setQuantityElement(2)}>2
                            </li>
                            <li className="menu__item"
                                onClick={() => this.setQuantityElement(4)}>4
                            </li>
                            <li className="menu__item"
                                onClick={() => this.setQuantityElement(6)}>6
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

Pagination.contextType = AppContext;
