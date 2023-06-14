import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {addItem, addText, previewItem} from "../redux/action/addItem.action";
import {store} from "../redux/store";
import logo from "../plus.png";
import check from "../check.png";

const InputField = ({addText, text, selected, addItem}) => {
        const [results, setResults] = useState([]);
        const [search, setSearch] = useState("");
        const [result, setResult] = useState("");

        const [isSaved, setIsSaved] = useState(false);
        const [btnText, setBtnText] = useState('Сохранить');

        const saveCard = () => {
            setBtnText('Сохранено')
            setIsSaved(true);
        };

        const [item, setItem] = useState([]);

        const [cardInfo, setCardInfo] = useState({
            name: '', address: '', management: '', managementPos: '', inn: '', kpp: '', ogrn: ''
        })
        let showPreview = false

        async function getListData() {
            var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
            var token = "0f91f8b1681bac6a7cb20bf1eca56ca7159a315e";
            var query = search;
            var options = {
                method: "POST", mode: "cors", headers: {
                    "Content-Type": "application/json", "Accept": "application/json", "Authorization": "Token " + token
                }, body: JSON.stringify({query: query})
            }

            await fetch(url, options).then(response => response.text())
                .then(result => {
                    result = JSON.parse(result)
                    result = result.suggestions
                    setResults(result)
                    return result
                }).catch(error => console.log("error", error));

        }


        const userSearch = (event) => {
            setSearch(event.target.value);
            setResult(event.target.value)
            getListData()
        }
        const displayResults = () => {
            if (search.length > 0) {
                if (results.length > 0) {
                    return results.map(res => (

                        <div className="list-card" onClick={(e) => {
                            showPreview = true;
                            setCardInfo({
                                name: res?.value,
                                address: res?.data?.address?.value,
                                management: res?.data?.management?.name,
                                managementPos: res?.data?.management?.post,
                                inn: res?.data?.inn,
                                kpp: res?.data?.kpp,
                                ogrn: res?.data?.ogrn,
                            })
                            setSearch([]);
                            setIsSaved(false)
                        }}>
                            <h1 className="list-card__name" key={res.id}>{res.value}</h1>
                            <div className="list-card__info">
                                <p>{res?.data?.inn}</p>
                                <p>{res?.data?.address?.value}</p>
                            </div>
                        </div>));
                }
            }
        };
        let showCard = () => {
            if (cardInfo.name !== '') {
                return (
                    <div className="item-card__wrapper">
                        <h1 className="item-card__name">    {cardInfo.name}</h1>
                        <div className="item-card__inner">
                            <div className="item-card__contacts">
                                <div className="item-card__address">
                                    <h4>Юридический адрес</h4>
                                    <p> {cardInfo.address}</p>
                                </div>
                                <div className="item-card__management">
                                    <h4>{cardInfo.managementPos}</h4>
                                    <p>{cardInfo.management}</p>
                                </div>
                            </div>
                            <div className="item-card__info">
                                <div className="item-card__data"><h4>ИНН</h4><p>{cardInfo.inn}</p></div>
                                <div className="item-card__data"><h4>КПП</h4><p>{cardInfo.kpp}</p></div>
                                <div className="item-card__data"><h4>ОГРН</h4><p>{cardInfo.ogrn}</p></div>
                            </div>
                        </div>
                        <button className="btn-save"

                                style={{
                                    backgroundColor: isSaved ? 'transparent' : ' #F50634',
                                    color: isSaved ? ' #B9B9B9' : 'white',
                                }}
                                onClick={() => {
                                    addItem(cardInfo);

                                    saveCard()
                                }}><img src={check} style={{
                            display: isSaved ? 'block' : 'none',

                        }}/>{btnText}
                        </button>
                    </div>
                )
            }
        }
        let showImgPlug = () => {

            return (
                <div className="preview-info">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p className="preview-info__txt">Для добавления новой организации введите ее название, ИНН или
                        адрес.</p>
                </div>

            )

        }
        const handleChange = e => addText(e.target.value);
        const handleSubmit = e => {
            addItem(text);

        };

        return (<div>
            <p className="input-name">Организация или ИП</p>
            <input type="text" onChange={userSearch} className="main-input" value={result}/>
            <div className="list-items">{displayResults()}</div>
            {showImgPlug()}
            {showCard()}
            {/*<div className="item-card__wrapper">*/}
            {/*    <h1 className="item-card__name">    {cardInfo.name}</h1>*/}
            {/*    <div className="item-card__inner">*/}
            {/*        <div className="item-card__contacts">*/}
            {/*            <div className="item-card__address">*/}
            {/*                <h4>Юридический адрес</h4>*/}
            {/*                <p> {cardInfo.address}</p>*/}
            {/*            </div>*/}
            {/*            <div className="item-card__management">*/}
            {/*                <h4>{cardInfo.managementPos}</h4>*/}
            {/*                <p>{cardInfo.management}</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="item-card__info">*/}
            {/*            <div className="item-card__data"><h4>ИНН</h4><p>{cardInfo.inn}</p></div>*/}
            {/*            <div className="item-card__data"><h4>КПП</h4><p>{cardInfo.kpp}</p></div>*/}
            {/*            <div className="item-card__data"><h4>ОГРН</h4><p>{cardInfo.ogrn}</p></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <button className="btn-save" onClick={() => addItem(cardInfo)}>Сохранить</button>*/}
            {/*</div>*/}
        </div>)

    };


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    addText: value => dispatch(addText(value)),
    previewItem: preview => dispatch(previewItem(preview)),
});
const mapStateToProps = ({text, selected}) => ({
    text, selected
});
export default connect(mapStateToProps, mapDispatchToProps)(InputField);
