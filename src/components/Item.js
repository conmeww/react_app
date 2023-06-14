import React, {useState} from "react";
import {connect} from "react-redux";
import {deleteItem} from "../redux/action/addItem.action";
import logo from "../trash.png";
import check from "../check.png";
import arrow from '../arrow.png'

const Item = ({item, idx, deleteItem, name, address, kpp, ogrn, inn, management, managementPos}) => {
    const [expand, setExpand] = useState(true);
    const [expandBtnText, setExpandBtnText] = useState('подробнее');

    const expandCard = () => {
        setExpand(current => !current);
        if(expand === true) {
            setExpandBtnText('скрыть подробности')
        } else  {
            setExpandBtnText('подробнее')
        }

    };


    return (
        <div
            className="item-saved"
        >
            <div className="item-saved__name">{name}</div>
            <div className="item-saved__data">
                <div className="item-saved__detail">
                    <p className="item-saved__field-name">ИНН</p>
                    <p className="item-saved__field-data">{inn}</p>
                </div>

                <div style={{
                    height: expand ? '0px' : '100%',
                    display: expand ? 'none' : 'block',

                }}>
                    <div className="item-saved__detail">
                        <p className="item-saved__field-name">КПП</p>
                        <p className="item-saved__field-data">{kpp}</p>
                    </div>
                    <div className="item-saved__detail">
                        <p className="item-saved__field-name">ОГРН</p>
                        <p className="item-saved__field-data">{ogrn}</p>
                    </div>
                    <div className="item-saved__detail">
                        <p className="item-saved__field-name">{managementPos}</p>
                        <p className="item-saved__field-data">{management}</p>
                    </div>
                    <div className="item-saved__detail">
                        <p className="item-saved__field-name">Юридический адрес</p>
                        <p className="item-saved__field-data">{address}</p>
                    </div>
                </div>


            </div>


            <p className="btn-expand"

                    onClick={() => {
                        expandCard()

                    }}>{expandBtnText}<img src={arrow} style={{
                transform: expand ? 'rotate(360deg)' : 'rotate(180deg)',

            }}/>
            </p>
            <div className="item-saved__delete" onClick={() => deleteItem(idx)}>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    deleteItem: key => dispatch(deleteItem(key)),
});
const mapStateToProps = ({text, selected}) => ({
    text,
    selected
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);
