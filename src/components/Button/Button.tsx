import React, {Component} from 'react';
import './Button.css';


type Props = {
    id: number,
    caption: string,
    count: number,
    action: (id: number, count: number) => void
}

class Button extends Component<Props> {


    render() {
        return (
            <button className='Button btn btn-outline-dark '
                    onClick={() => this.props.action(this.props.id, this.props.count)
                    }>
                {this.props.caption}
            </button>
        );
    }
}

export default Button;
