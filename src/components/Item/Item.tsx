import React, {ChangeEvent, Component} from 'react';
import './Item.css';
import Button from "../Button/Button";
import Slider from "./Slider/Slider";
import itemType from '../../type/typeItem'
import {AppContext} from "../../Context/context";

type State = {
    count: number
}

type Props = {
    item: itemType
    remove: (id: number, count: number) => void,
    add: (id: number, count: number) => void,
    nameButton: string;
}

class Item extends Component<Props, State> {
    state = {
        count: this.props.item.count
    };
    qualityItems = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({count: +e.target.value})
    };

    render() {
        const context = this.context;
        const {name, images, sum, count, id} = this.props.item;
        const price = sum * count;
        return (
            <div className="items">
                <p className='item'>{name}</p>
                <Slider images={images}/>
                {context.dictionary.item.price}: {price}$
                {
                    this.props.nameButton === context.dictionary.button.delete ?
                        <div>
                            <Button id={id} caption={'+'} count={1} action={this.props.add}/>
                            <Button id={id} caption={'-'} count={-1}
                                    action={price > sum ? this.props.add : this.props.remove}/>
                            <div className="item__count">
                                {context.dictionary.item.quantity}: {count}
                            </div>
                        </div>
                        :
                        <div className="item__count">
                            <input onChange={this.qualityItems} required
                                   className="form-control form-control-sm w-50 count__input" type="number"
                                   min={1}
                                   value={this.state.count}
                                   placeholder={context.dictionary.item.quantity}/>
                        </div>
                }
                <Button id={id}
                        caption={this.props.nameButton}
                        count={this.state.count}
                        action={this.props.nameButton === context.dictionary.button.delete ? this.props.remove : this.props.add}/>
            </div>
        );
    }
}

Item.contextType = AppContext;
export default Item;
