import React, {Component} from 'react';
import {AppContext} from "../../Context/context";
import {Lang} from "../../type/typeLang";
import './SwitcherLang.css';

type Props = {
    lang: Lang,
    changeLang: (lang: Lang) => void
};

export class SwitcherLang extends Component<Props> {
    changeLang = (lang: Lang) => {
        this.props.changeLang(lang);
    };

    render() {
        const context = this.context.dictionary.boxItems;
        return (
            <div className="menu">
                <ul className="menu__dropdown">
                    <li className="dropdown__item">{context.selectLang}
                        <ul className="item__ul">
                            <li className="item__lang" onClick={() => this.changeLang('en')}>English</li>
                            <li className="item__lang" onClick={() => this.changeLang('ua')}>Українська</li>
                            <li className="item__lang" onClick={() => this.changeLang('ru')}>Русский</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

SwitcherLang.contextType = AppContext;
