import React, {Component} from 'react';
import './Slider.css'

type Props = {
    images: string[]
}

type State = {
    activeImg: number,
}

class Slider extends Component<Props, State> {
    state = {
        activeImg: 0,
    };

    sliderRight = () => {
        this.setState(({activeImg}) => {
            return {
                activeImg: activeImg === this.props.images.length - 1 ? 0 : activeImg + 1,
            }
        })
    };

    sliderLeft = () => {
        this.setState(({activeImg}) => {
            return {
                activeImg: activeImg === 0 ? this.props.images.length - 1 : activeImg - 1,
            }
        })
    };

    render() {
        let dots = this.props.images.map((item, index) => index === this.state.activeImg ?
            <div className="dots active"/> : <div className="dots"/>);

        return (
            <div>
                <div className='Slider_wrapper'>
                    <div>
                        <div className="arrow left" onClick={this.sliderLeft}/>
                    </div>
                    <img src={this.props.images[this.state.activeImg]} alt="" className="Slider__img"/>
                    <div>
                        <div className="arrow right" onClick={this.sliderRight}/>
                    </div>
                </div>
                <div className="Slider__dots">
                    {dots}
                </div>
            </div>
        );
    }
}

export default Slider;
